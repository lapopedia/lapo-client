import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../components/HomeView'
import DetailView from '../components/DetailView'
import PostView from '../components/PostView'
import Login from '../components/Navbar/Sign/Login.vue'
import Register from '../components/Navbar/Sign/Register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/post',
      name: 'post',
      component: PostView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
