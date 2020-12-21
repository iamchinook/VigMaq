import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import 'vuetify/dist/vuetify.min.css'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacto',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/servicios',
    name: 'Servicios',
    component: () => import('../views/Servicios.vue')
  },
  {
    path: '/maquinarias',
    name: 'Maquinarias',
    component: () => import('../views/Maquinarias.vue')
  },
  {
    path: '/mail',
    name: 'Mail',
    component: () => import('../views/Mail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: "active",
  base: process.env.BASE_URL,
  routes
})

export default router
