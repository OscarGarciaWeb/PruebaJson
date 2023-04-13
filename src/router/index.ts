import { createRouter, createWebHistory } from 'vue-router'
import JsonPrueba from '../components/JsonPrueba.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: JsonPrueba
    },
  ]
})

export default router
