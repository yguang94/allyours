import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import history from '@/components/winHistory'
import details from '@/components/Details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/history',
      name: 'history',
      component: history
    },
    {
      path: '/details',
      name: 'details',
      component: details
    }
  ]
})
