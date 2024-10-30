import { createRouter, createWebHistory } from 'vue-router'
import Space from '@/views/Space.vue'
import Destination from '@/views/Destination.vue'
import Crew from '@/views/Crew.vue'
import Technology from '@/views/Technology.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Space',
      component: Space
    },

    {
      path: '/Destination',
      name: 'Destination',
      component: Destination
    },

    {
      path: '/Crew',
      name: 'Crew',
      component: Crew
    },

    {
      path: '/Technology',
      name: 'Technology',
      component: Technology
    }
  ]
})

export default router
