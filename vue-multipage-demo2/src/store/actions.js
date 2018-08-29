import Vue from 'vue'
import * as types from './types'
import global from '../common/js/global'
import sessionstorage from 'sessionstorage'
import json from 'JSON'

export default {

  [types.GET_LOGIN_VERIFY] ({commit}, param) {
    // alert(param.user.password)
    if (param && param.user && param.user.username && param.user.password){
      var username = param.user.username
      var password = param.user.password
    }

    Vue.http.post('http://localhost:8081/LoginServlet', {username: username, password: password}).then((res) => {
      //alert(res.body)
      var loginverify='failure'
      if ( 'success' === res.body) {
        sessionstorage.setItem('username', username)
        loginverify='success'
      }

      commit(types.GET_LOGIN_VERIFY, res.body.code) //?
      param.callback && param.callback({code: loginverify})
    })
  }
}
