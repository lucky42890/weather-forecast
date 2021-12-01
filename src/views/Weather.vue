<template>
  <div class='app-container'>
    <div v-if="errorMsg" class="w-container">{{ errorMsg }}</div>
    <div v-else class='w-container'>
      <div class='w-header-container'>
        <p class="today-temp">{{ currentTemperature }}<span>&#176;F</span></p>
        <p class="today-wind">
          <span>Wind: {{ currentWindSpeed }} mph</span><br/>
          <span>Humidy: {{ currentHumidy }}%</span>
        </p>
        <div class="city-search">
          <input class="city-search__input" type="text" v-model="city" @keyup="handleCityChange" />
          <p class="city-search__today">{{ currentDay }}</p>
        </div>
      </div>

      <div class='w-temp-container'>
        <p class='label'>Today's hourly temperatures</p>
        <div class='list'>
          <HourTemperature
            v-for="item in hourlyForcast"
            :key="item"
            :time="item.label"
            :temperature="item.temp"
          />      
          <HourTemperature time="" :temperature="0" :visibility="true" />
        </div>
      </div>

      <div class='w-temp-container'>
        <p class='label'>7 day forecast</p>
        <div class='list'>
          <DayTemperature
            v-for="item in dailyForcast"
            :key="item"
            :day="item.label"
            :high="item.high"
            :low="item.low"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { mapGetters, mapState } from 'vuex'
import HourTemperature from '../components/HourTemperature.vue'
import DayTemperature from '../components/DayTemperature.vue'
import { GET_WEATHER } from '../store/actions.type'

export default {
  name: 'Weather',
  components: {
    HourTemperature,
    DayTemperature
  },
  data() {
    return {
      currentDate: null,
      currentDay: '',
      city: 'New York'
    }
  },
  computed: {
    ...mapGetters([
      'currentTemperature',
      'currentWindSpeed',
      'currentHumidy',
      'hourlyForcast',
      'dailyForcast'
    ]),
    ...mapState({
      errorMsg: state => state.weather.errorMsg
    })
  },
  mounted() {
    this.initTodayData()
    this.$store.dispatch(GET_WEATHER, this.city);
  },
  methods: {
    initTodayData() {
      this.currentDay = moment().format('dddd')
    },
    handleCityChange(event) {
      if (event.code === 'Enter') {
        this.initTodayData()
        this.$store.dispatch(GET_WEATHER, this.city);
      }
    }
  }
}
</script>
