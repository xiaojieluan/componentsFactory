import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage'
import flexExample from '@/views/flexExample/flexExample'
import moveBall from '@/views/moveBall/moveBall'
import centeredDisplay from '@/views/centeredDisplay/centeredDisplay'
import triangle from '@/views/triangle/triangle'
import searchFace from '../views/searchFace/searchFace'
import touziLayout from '../views/touziLayout/touziLayout'
import animationExample from '../views/animationExample/animationExample'
import transitionExample from '../views/transitionExample/transitionExample'
import transformExample from '../views/transformExample/transformExample'

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
    },
    {
      path: '/triangle',
      name: 'triangle',
      component: triangle
    },{
      path: '/searchface',
      name: 'search-face',
      component: searchFace
    },
    {
      path: '/touzi',
      name: 'touzi-layout',
      component: touziLayout
    },
    {
      path: '/animation',
      name: 'animation-example',
      component: animationExample
    },
    {
      path: '/transition',
      name: 'transition-example',
      component: transitionExample
    },
    {
      path: '/transform',
      name: 'transform-example',
      component: transformExample
    }

  ]
})
