<template>
  <div id="maindiv">
    <div id="well">
       <label id="wla">欢迎{{username}}</label>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  data () {
    return {
      username: undefined
    }
  },
  created: function () {
    this.username = sessionStorage.getItem('username')
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
    background:url(./main-bg.jpg) no-repeat;
    background-size:80%;
    // backcolor:#FF0000;
    #well{
      width: 200px;
      height:100px;
      margin-left: 600px;
     // margin-right: 100px;
      //margin-top: 20px;
      padding-top: 40px;
    }
    #wla{
      color black
    }
  }
</style>
