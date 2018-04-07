<template>
  <div id="app">
    <el-container>
      <Header/>
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
  import Header from 'base/header/header'
  import Footer from 'base/footer/footer'
  export default {
    name: 'App',
    components: {
      Header,
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
      margin: 60px 0
      padding: 0
</style>
