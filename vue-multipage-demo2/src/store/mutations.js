import Vue from 'vue'
import * as types from './types'
import state from './state'

export default {
  // 获取并更新用户对象
  [types.GET_USERVO] (state, user) {
    if (user && user.username && user.password){
      Vue.set(state.USERVO, 'USERVO', user)
    }
  },
  // 登录验证
  [types.GET_LOGIN_VERIFY] (state, loginverify) {
    if (loginverify){
      Vue.set(state.LOGIN_VERIFY, 'LOGIN_VERIFY', loginverify)
    }
  }
}
