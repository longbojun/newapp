<template>
  <div id="app">
    <el-container>
      <el-main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
      <Footer/>
    </el-container>
  </div>
</template>

<script>
  import Footer from 'base/footer/footer'
  export default {
    name: 'App',
    components: {
      Footer
    }
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
