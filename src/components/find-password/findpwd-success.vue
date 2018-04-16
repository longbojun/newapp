<template>
  <div class="findpwd-success">
    <Header :title="title"></Header>
    <div class="findpwd-success-content">
      <h1 class="title">恭喜您，重置密码成功</h1>
      <p class="btn">
        <router-link to="/login"><el-button type="text">马上登陆</el-button></router-link>
      </p>
    </div>
  </div>
</template>

<script>
  import Header from 'base/header/header'
  export default {
    data(){
      return {
        title: '找回登录密码'
      }
    },
    components: {Header}
  }
</script>

<style lang="stylus">
  .findpwd-success
    .findpwd-success-content
      margin-top: 60px
      .title,.btn
        padding: 10px 0
        text-align: center
</style>
