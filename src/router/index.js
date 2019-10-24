import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login'
import Register from '../components/Register'
import Dashboard from '../components/Dashboard'

Vue.use(VueRouter)

const routes = [
  {path: '/',name: 'home',component: Home },
  {path: '/login',name: 'login',component: Login},
  {path: '/register',name: 'Register',component: Register},
  {path: '/dashboard',name: 'Dashboard',component: Dashboard}
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
