<template>
  <div>
    <loginheader></loginheader>
    <hello></hello>
  </div>
</template>
export default {
name: 'index'
}
<script type="text/ecmascript-6">
import loginheader from 'components/loginheader/loginheader'
import hello from 'components/hello/hello'

export default {
  components: {
    loginheader,
    hello
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .cart-main
    position: relative
    padding-top: 20px
    width: 1190px
    //background-color:rgb(201 22 35)
    margin-top :20px
</style>
