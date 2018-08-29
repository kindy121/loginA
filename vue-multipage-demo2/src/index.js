// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app2 from './components/app'
import Vuex from 'vuex'
import store from './store/store'
import VueResource from 'vue-resource'
import sessionstorage from 'sessionstorage'
import json from 'JSON'

import 'common/stylus/index.styl'
import VeeValidate, {Validator} from 'vee-validate'
import messages from 'vee-validate/dist/locale/zh_CN'
import main from './components/main'
import ElementUI from 'element-ui'
import router from './router/router'

const config = {
  touched: true,
  strict: true,
  events: 'input|blur',
  errorBagName: 'errors', // change if property conflicts.
  delay: 0,
  locale: 'zh_CN'
}
Vue.config.productionTip = false
Vue.use(VeeValidate, config)
VeeValidate.Validator.localize('zh_CN')
/* eslint-disable no-new */
Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(sessionstorage)
Vue.use(json)
Vue.use(ElementUI)


// 拦截没有登录的url
router.beforeEach((to,from,next)=>{
  if(to.meta.requiresAuth){
    if(!isEmptyObject(sessionStorage.getItem('username'))){
      next();
    } else {
      next({
        path: '/',
        query: {
          redirect: to.fullPath}
      })
    }
  }else{
    next();
  }
})
function isEmptyObject(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

const app = new Vue({
  el: '#index',
  store,
  router,
  render: h => h(app2)
})
