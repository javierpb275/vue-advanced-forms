import { createRouter, createWebHashHistory } from 'vue-router'
//import Activities from '../views/Activities.vue'

const routes = [
  {
    path: '/',
    redirect: '/activities'
  },
  {
    path: '/activities',
    name: 'activities',
    component: () => import('../views/Activities.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
