import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../view/home/home')

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
  ]
})