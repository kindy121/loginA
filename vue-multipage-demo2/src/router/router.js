import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import home from '../components/home/home'
import main from '../components/main'
import upload from '../components/home/homemain/upload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home,
      children: [
        {
          path: '/basetable',
          component: resolve => require(['../components/home/homemain/basetable'], resolve)
        },
        {
          path: '/upload',
          component: upload
        }
      ]
    },
    {
      path: '/main',
      component: main,
      meta: { requiresAuth: true }
    },
    {
      path: '/index',
      component: index
    }
  ]
})
