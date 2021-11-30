import { createRouter, createWebHashHistory } from 'vue-router'
import Weather from '../views/Weather.vue'

const routes = [
  { path: '/', component: Weather }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router