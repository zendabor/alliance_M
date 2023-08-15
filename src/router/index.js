import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "../components/pages/MainPage.vue";
import CatalogPage from "../components/pages/CatalogPage.vue";
import CreditPage from "../components/pages/CreditPage.vue";
import AboutPage from "../components/pages/AboutPage.vue";
import ContactPage from "../components/pages/ContactPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: CatalogPage
    },
    {
      path: '/credit',
      name: 'credit',
      component: CreditPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactPage
    }
  ]
})

export default router
