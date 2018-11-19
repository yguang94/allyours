import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import history from '@/components/History'
import historyContent from '@/components/historyContent'
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
      path: '/historyContent',
      name: 'historyContent',
      component: historyContent
    },
    {
      path: '/details',
      name: 'details',
      component: details
    }
  ]
})
