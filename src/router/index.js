import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Pregled-PC',
    name: 'Pregled-PC',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pregled-PC.vue')
  },
  {
    path: '/Wishlist',
    name: 'Wishlist',
    component: () => import(/* webpackChunkName: "about" */ '../views/Wishlist.vue')
  },
    {
    path: '/Slaganje-PC',
    name: 'Slaganje-PC',
    component: () => import(/* webpackChunkName: "about" */ '../views/Slaganje-PC.vue')
  },
    {
    path: '/BPPK',
    name: 'Best-Price-Performace-Komponente',
    component: () => import(/* webpackChunkName: "about" */ '../views/BPPK.vue')
  },
  {
    path: '/Mobitel',
    name: 'Mobitel',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mobitel.vue')
  },
  {
    path: '/login-reg',
    name: 'Login/registracija',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login-reg.vue')
  },

  {
    path: '/registracija',
    name: 'Registracija',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Registracija.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
