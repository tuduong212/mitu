import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/client/Home/Home.vue'
// import About from '@/views/client/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})

export default router
