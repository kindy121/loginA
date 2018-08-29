export default {
  // 当前用户对象
  currenUserVO (state) {
    if (state.USERVO && state.USERVO.username && state.USERVO.password) {
      var user = state.USERVO
      return user
    }
  },
  // 获取登录验证
  LOGIN_VERIFY (state) {
    if (state.LOGIN_VERIFY) {
      var LOGIN_VERIFY = state.LOGIN_VERIFY
      return LOGIN_VERIFY
    }
  }
}
