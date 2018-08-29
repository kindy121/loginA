<template>
  <div>
    <el-container>
      <el-aside width="200px"><homeaside></homeaside></el-aside>
      <el-container>
        <el-header><homeheader></homeheader></el-header>
        <el-main>
          <div>
            <transition name="move" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
        </el-main>
      </el-container>
    </el-container>
</div>
</template>
<script type="text/ecmascript-6">
import homeaside from './homeaside/homeaside'
import homeheader from './homeheader/homeheader'
export default {
  components: {
    homeaside,
    homeheader
  }
}
</script>
<style>
  .el-header, .el-footer {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 60px;
    margin-top: -15px;
  }

  .el-aside {
    background-color:#545c64;
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 800px;
    margin-top: -15px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-container {
    margin-bottom: 0px;
    margin-top: 0px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
