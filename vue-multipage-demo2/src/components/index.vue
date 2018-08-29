<template>
  <div>
    <loginheader></loginheader>
    <div class="login-main">
      <maincenter></maincenter>
    </div>
  </div>
</template>
export default {
name: 'index'
}
<script type="text/ecmascript-6">
import loginheader from 'components/loginheader/loginheader'
import maincenter from 'components/maincenter/maincenter'
export default {
  components: {
    loginheader,
    maincenter
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .cart-main
    position: relative
    padding-top: 20px
    width: 100%
    //background-color:rgb(201 22 35)
    margin-top :20px
</style>
