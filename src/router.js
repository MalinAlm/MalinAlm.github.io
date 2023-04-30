import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import ShopView from './views/ShopView.vue'
import CartView from './views/CartView.vue'
import CategoriesView from './views/CategoriesView.vue'
import NewsView from './views/NewsView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: '/'
    },
    {
      component: ShopView,
      path: '/shop'
    },
    {
      component: CartView,
      path: '/cart'
    },
    {
      component: CategoriesView,
      path: '/category/:anyCategory'
    },
    {
      component: NewsView,
      path: '/newsletter'
    }
  ]
})
