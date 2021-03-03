import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Home/Pregled-PC',
    name: 'Pregled/Konfiguracija/PC',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pregled-PC.vue')
  },
  {
    path: '/Kosarica',
    name: 'Kosarica',
    component: () => import(/* webpackChunkName: "about" */ '../views/Kosarica.vue')
  },
    {
    path: '/Home/Slaganje-PC',
    name: 'Slaganje-PC',
    component: () => import(/* webpackChunkName: "about" */ '../views/Slaganje-PC.vue')
  },
    {
  path: '/Slaganje-PC/RAM',
  name: 'RAM',
  component: () => import(/* webpackChunkName: "about" */ '../views/RAM.vue')
  },
  
  {
  path: '/Slaganje-PC/GPU',
  name: 'GPU',
  component: () => import(/* webpackChunkName: "about" */ '../views/GPU.vue')
  },

  {
    path: '/Slaganje-PC/CPU',
    name: 'CPU',
    component: () => import(/* webpackChunkName: "about" */ '../views/CPU.vue')
    },

    {
      path: '/Slaganje-PC/Maticna',
      name: 'Maticna',
      component: () => import(/* webpackChunkName: "about" */ '../views/Maticna.vue')
      },

      {
        path: '/Slaganje-PC/PSU',
        name: 'PSU',
        component: () => import(/* webpackChunkName: "about" */ '../views/PSU.vue')
        },
        
        {
          path: '/Slaganje-PC/HDD-SSD',
          name: 'HDD-SSD',
          component: () => import(/* webpackChunkName: "about" */ '../views/HDD-SSD.vue')
          },

  {
    path: '/Home/BPPK',
    name: 'Best-Price-Performace-Komponente',
    component: () => import(/* webpackChunkName: "about" */ '../views/BPPK.vue')
  },
  {
    path: '/Home/Mobitel',
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
