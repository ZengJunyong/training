import { createRouter, createWebHistory } from 'vue-router'
import Project14 from '../views/Project14.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Project14
    },
    {
      path: '/project14',
      name: 'project14',
      component: () => import('../views/Project14.vue')
    },
    {
      path: '/debriefs',
      name: 'debriefs',
      component: () => import('../views/Debriefs.vue')
    }
  ]
})

export default router
