import moment from 'moment'
import API from '../../utils/CallApi'
import { GET_WEATHER } from '../actions.type'

const API_KEY = process.env.VUE_APP_API_KEY

const STATUS = {
  REQUESTED: 'requested',
  SUCCEEDED: 'succeeded',
  FAILED: 'failed',
}

const state = () => ({
  current: {},
  hourly: [],
  daily: [],
  weatherStatus: null,
  errorMsg: ''
})

const getters = {
  currentTemperature (state) {
    return parseInt(state.current?.temp, 10) || 0
  },
  currentWindSpeed (state) {
    return (state.current?.wind_speed * 2.237).toFixed(2) || 0
  },
  currentHumidy (state) {
    return state.current?.humidity || 0
  },
  hourlyForcast (state) {
    const data = []
    for (let i = 0; i < state.hourly.length; i++) {
      if (i === 6) break

      data.push({
        label: moment.unix(state.hourly[i].dt).format('ha'),
        time: moment.unix(state.hourly[i].dt).format('k'),
        temp: parseInt(state.hourly[i].temp, 10)
      })
    }

    return data
  },
  dailyForcast (state) {
    const data = []
    for (let i = 0; i < state.daily.length; i++) {
      if (i === 7) break

      data.push({
        label: moment.unix(state.daily[i].dt).format('ddd'),
        high: parseInt(state.daily[i].temp.max, 10),
        low: parseInt(state.daily[i].temp.min, 10),
        windSpeed: (state.daily[i].wind_speed * 2.237).toFixed(2),
        humidity: state.daily[i].humidity
      })
    }

    return data
  }
}

const actions = {
  async [GET_WEATHER] ({ commit }, city) {
    commit('setState', { key: 'weatherStatus' , data: STATUS.REQUESTED })

    try {
      let response = await API.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      const coord = response.data.coord
      const excludePart = 'minutely,alerts'
      response = await API.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=${excludePart}&appid=${API_KEY}`)
      
      commit('setState', { key: 'current' , data: response.data?.current || {} })
      commit('setState', { key: 'hourly' , data: response.data?.hourly || [] })
      commit('setState', { key: 'daily' , data: response.data?.daily || [] })
      commit('setState', { key: 'weatherStatus' , data: STATUS.SUCCEEDED })

    } catch (e) {
      commit('setState', { key: 'errorMsg' , data: e.response?.data?.message || 'Error while getting weather data' })
      commit('setState', { key: 'weatherStatus' , data: STATUS.FAILED })
    }
  },
}

const mutations = {
  setState (state, {key, data}) {
    state[key] = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}