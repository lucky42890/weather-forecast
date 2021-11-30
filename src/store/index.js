import { createStore, createLogger } from 'vuex'
import weather from './modules/weather'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    weather
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})