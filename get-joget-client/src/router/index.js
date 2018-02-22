import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import GameRoom from '@/views/GameRoom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/room',
      name: 'GameRoom',
      component: GameRoom
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
