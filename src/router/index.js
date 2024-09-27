import { createRouter, createWebHistory } from 'vue-router'
import Project3 from '../views/Project3.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Project3
    },
    {
      path: '/project4',
      name: 'project4',
      component: () => import('../views/Project4.vue')
    },
    {
      path: '/project5',
      name: 'project5',
      component: () => import('../views/Project5.vue')
    },
    {
      path: '/project6',
      name: 'project6',
      component: () => import('../views/Project6.vue')
    },
    {
      path: '/project7',
      name: 'project7',
      component: () => import('../views/Project7.vue')
    },
    {
      path: '/project8',
      name: 'project8',
      component: () => import('../views/Project8.vue')
    },
    {
      path: '/debriefs',
      name: 'debriefs',
      component: () => import('../views/Debriefs.vue')
    }
  ]
})

export default router
