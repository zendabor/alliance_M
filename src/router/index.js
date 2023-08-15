import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "../components/pages/MainPage.vue";
import TestPage from "../components/pages/TestPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    },
    {
      path: '/about',
      component: TestPage
    }
  ]
})

export default router
