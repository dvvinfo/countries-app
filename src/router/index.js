import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detail/',
      name: 'CountryView',
      component: () => import('../views/CountryView.vue')
    },
    {
      path: '/detail/:alpha3Code',
      name: 'country/',
      component: () => import('../views/CountryView.vue')
    }
  ]
})

export default router
