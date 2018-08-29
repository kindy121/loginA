<template>
  <div  id="logo-section-app">
    <div  id="headerw">
      <a id="hlog"  href="//www.jd.th" clstag="pageclick|keycount|th_header_logo|0"></a>
    </div>
    <div id="headerleft">&nbsp;&nbsp;&nbsp;{{message}}</div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  data(){
    return{
      username:undefined,
      message:'登录'
    }
  },
  created: function () {
    this.username=sessionStorage.getItem('username')
    if(this.username&&'http://localhost:8080/#/main'.trim()===window.location.href){
      this.message='welcome'
    }
  }
}
</script>
<style >
  #logo-section-app {
    padding: 27px 0;
    height: 36px;
    //box-shadow: 0 6px 6px 0 rgba(0,0,0,.06);
  }
  #headerw {
    width: 1190px;
    margin: 0 auto;
  }
  #headerleft {
    width: 20%;
    height: 34px;
    display: inline-block;
    float: left;
    margin-left: 14px;
    padding-left: 19px;
    font-size: 24.8px;
    margin-right: 50px;
    white-space: nowrap;
    position: relative;
    line-height: 34px;
    margin-top: 3px;
    color: #333;
    box-shadow: -3px 0px 0px  rgba(0,0,0,.06);
  }
  #hlog{
    display: inline-block;
    width: 230px;
    height: 31px;
    margin-right: 80px;
    background:url(logo-center.jpg) no-repeat 50%;
    float: left;
    background-size: cover;
    margin-top: 2px;
  }
</style>
