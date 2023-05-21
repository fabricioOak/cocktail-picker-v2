import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search/:search',
      name: 'search',
      component: () => import('@/views/SearchPage.vue')
    },
    {
      path: '/details/:id',
      name: 'details',
      component: () => import('@/views/DetailsPage.vue')
    }
  ]
})

export default router
