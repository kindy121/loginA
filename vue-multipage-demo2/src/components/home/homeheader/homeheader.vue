<template>
    <div class="hmenu">
      <div class="line"></div>
      <el-menu
        router :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1" class="witem" >处理中心</el-menu-item>
        <el-submenu index="2" class="witem" >
          <template slot="title">我的工作台</template>
          <el-menu-item index="/">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template class="witem" slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" class="witem" disabled>消息中心</el-menu-item>
        <el-menu-item index="4" class="witem"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu>
    </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
  .hmenu{
    margin-left: 20px;
  }
  .witem{
    padding-left:20px;
  }

</style>
