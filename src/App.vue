<template>
  <div id="app">
    <el-container>
      <el-main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="stylus">
  body
    margin: 0
    padding: 0
    background: #f4f4f4
    .el-main
      padding: 0
</style>
