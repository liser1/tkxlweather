import { createRouter, createWebHashHistory } from 'vue-router'
import DayweatherShow from '../components/DayweatherShow.vue'
import temecharts from '../components/dayweather/TemEcharts.vue'
import airecharts from '../components/dayweather/AirEcharts.vue'
import windecharts from '../components/dayweather/WindEcharts.vue'
import weekweatherShow from '../components/WeekweatherShow.vue'
import monthweatherShow from '../components/MonthweatherShow.vue'

const routes = [
  {
    path: '/dayweathershow',
    component: DayweatherShow,
    children: [
      {
        path: '/dayweathershow/tem',
        component: temecharts
      },
      {
        path: '/dayweathershow/air',
        component: airecharts
      },
      {
        path: '/dayweathershow/wind',
        component: windecharts
      },
    ]
  },
  {
    path: '/weekweatherShow',
    component: weekweatherShow,
    children: [
    ]
  },
  {
    path: '/monthweatherShow',
    component: monthweatherShow,
    children: [
    ]
  },
  {
    path: '/',
    redirect: '/weekweatherShow'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router