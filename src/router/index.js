import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage'
import flexExample from '@/views/flexExample/flexExample'
import moveBall from '@/views/moveBall/moveBall'
import centeredDisplay from '@/views/centeredDisplay/centeredDisplay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/home',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/flex',
      name: 'flexExample',
      component: flexExample
    },
    {
      path: '/ball',
      name: 'moveBall',
      component: moveBall
    },
    {
      path: '/centered',
      name: 'centeredDisplay',
      component: centeredDisplay
    }
  ]
})
