import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../components/Test.vue'
import Login from '../components/Login'
import Dashboard from '../components/Dashboard'
import About from '../views/About'
import ChartContainer from '../components/ChartContainer.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'home', component: Home },
  {path: '/login', name: 'login', component: Login},
  {path: '/test', name: 'test', component: Test},
  {path: '/dashboard', name: 'Dashboard', component: Dashboard, meta: {requiresAuth: true}},
  {path: '/about', name: 'About', component: About},
  {path: '/chartcontainer', name: 'chartcontainer', component: ChartContainer} // TODO ADD , meta: {requiresAuth: true}
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
