import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import ErrorPage from '../pages/ErrorPage.vue'
// import.meta.env.BASE_URL
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/404',
      component: ErrorPage
    }
  ]
})

export default router
