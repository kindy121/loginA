<template>
  <div id="maindiv">
    <div id="test">
      <div id="switch" class="switch">
        <span id="switchSpan">使用邮箱或用户名登录</span>
      </div>
      <div class="consignee-edit-wrap">
        <div class="left"><label class="ness">登录名</label></div>
        <div class="right">
          <input type="text" placeholder="请输入邮箱或电话号码" maxlength="20"  name="username" ref="username"
                 v-validate="'required'"/>
          <label class="clear" for="username" @click="clearInput($event)"></label>
          <div class="err-tips" v-show="errors.has('username')"><i class="i-tip-orange"></i>{{ errors.first('username') }}</div>
        </div>
        <div class="left"><label class="ness">密码</label></div>
        <div class="right">
          <input type="password" placeholder="请输入密码" maxlength="20"  name="password" ref="password"  v-validate="'required'"/>
          <label class="clear" for="password" @click="clearInput($event)"></label>
          <div class="err-tips" v-show="true"><i class="i-tip-orange"></i>{{ errors.first('username') }}
            {{errorMsg}}
          </div>
        </div>
        <div class="consignee-btns">
          <input type="button" class="btn btn-red" value="登录"  @click="login($event)"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import $ from 'jquery'
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import * as types from '../../store/types'

Vue.use(VeeValidate)

export default {
  data () {
    return {
      iserrmessage: false,
      errorMsg: ''
    }
  },
  mounted: function () {
    var _self = this
    _self.$validator.errors.clear()
    setTimeout(function () {
      _self.$validator.errors.clear()
    }, 100)
  },
  methods: {
    login: function (event) {
      var _self = this
      this.$validator.validateAll().then((isSuccess) => {
        if (isSuccess) {
          _self.username = this.$refs.username.value
          _self.password = this.$refs.password.value
          // _self.USERVO.username = this.$refs.username.value
          // _self.USERVO.password = this.$refs.password.value
          _self.$store.dispatch(types.GET_LOGIN_VERIFY, {
            user: {username: _self.username, password: _self.password},
            callback: function (ret) {
              if (ret.code === 'success') {
                _self.$router.push({ path: '/main' })
              } else {
                _self.errorMsg = '用户名或密码错误！'
              }
            }
          })
        }
      }).catch((e) => {
        console.log(e)
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #maindiv{
    width: 2000px;
    height:1000px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 20px;
    padding-top: 60px;
    background:url(./logoin-bg.jpg) no-repeat;
    background-size:80%;
   // backcolor:#FF0000;
  }
  #test{
    background-color: white;
    width:400px;
    height: 400px;
    margin-left: 45%;
   // margin-right:20px;
    position: relative;
  }
  #switch {
    margin-bottom: 10px;
    text-align: right;
    padding-right :70px;
    padding-top :20px;
  }
 #switchSpan {
    cursor: pointer;
   font-size: 12px;
   color: #0861cc;
  }
  .consignee-edit-wrap
    padding : 0
    margin-top :20px
    *
      font-size : 14px
      color: #0861cc;
    & > .left
        width: 140px
        display : inline-block
        text-align : right
        line-height : 36px
        vertical-align: top
        margin-right : 10px
        & > label
          position : relative
        & > .ness:after
          content: "*";
          position: absolute;
          color: #f00;
          top: 0px;
          left: -6px;
      & .right
        width : 200px
        display : inline-block
        text-align : left
        line-height : 36px
        margin-bottom : 20px
        position: relative
        font-size:0
        & > input
          height : 36px
          width : 180px
        & > input.input-with-code
          width: 180px
          vertical-align: middle
          border-left:0
        & > .err-tips
          color : #ff8822
          margin-top: 5px
          font-size : 12px
          line-height : 1.2
          margin-bottom : -10px
        & > .i-tip-orange
          background : url(./warn-orange.png) no-repeat
          width : 18px
          height : 18px
          display : inline-block
          vertical-align : middle
          margin-right: 5px
        & > .address-choose-wrapper
          /*border: 1px solid #d9d9d9*/
          width: 281px
  & > .consignee-btns
    //text-align : center
    padding-left 110px
    & > .btnpx
      padding : 0 16px
      cursor : pointer
      color : #ffffff
      height: 36px
      transition: background-color .15s ease, border .15s ease, color .15s ease
  & > .toast-wrapper
    position:absolute
    left:30px
    right:30px
    bottom:20px
  & > .btn.btn-red
    background-color : #dd2925
    width: 230px
    height: 40px
    border: 0
    font-size: 14px
    font-family: Arial,"Hiragino Sans GB"
    &:hover
      background-color : #c81623
</style>
