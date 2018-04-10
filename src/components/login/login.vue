<template>
  <div class="login">
    <div class="logo">
      <img src="./logo.png" alt="" width="80" height="80">
    </div>
    <div class="login-form">
      <div class="login-form-group">
        <el-input placeholder="请输入手机号码" prefix-icon="el-icon-search" v-model="userName" :maxlength="11"></el-input>
      </div>
      <div class="login-form-group">
        <el-input placeholder="请输入密码" prefix-icon="el-icon-search" v-model="passWord" :maxlength="16"></el-input>
      </div>
      <div class="login-form-group">
        <p class="err-text" ref="errText"></p>
      </div>
      <div class="login-form-group">
        <el-button type="primary" @click="handleSubmit">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getData, setCookie, clearCookie} from 'api/post'

  export default {
    data() {
      return {
        userName: '',
        passWord: ''
      }
    },
    methods: {
      handleSubmit(){
        const data = {
          userName: this.userName,
          passWord: this.passWord
        }
        // 测试账号 15372422339
        getData('/authenticate/login', '', data).then(res => {
          res = res.data
          if (res.success && res.code === '0') {
            const data = {
              userName: this.userName,
              token: res.data.token,
              isBorrower: res.data.isBorrower,
              isInvestor: res.data.isInvestor
            }
            setCookie(data)
            this.$router.push({path: '/member/account'})
          } else {
            this.$refs.errText.innerHTML = res.msg
          }
        })
      },

    },
    mounted(){
      // 清除缓存
      clearCookie('token')
    }
  }
</script>

<style lang="stylus">
  .login
    background: #fff
    .logo
      padding: 40px 0
      img
        display: block
        margin: 0 auto
    .login-form
      padding: 30px
      .login-form-group
        margin-bottom: 20px
        .el-button--primary
          width: 100%
          background: #ff5f0f
          border-color: #ff5f0f
        .el-input.is-active .el-input__inner, .el-input__inner:focus
          border-color: #ff5f0f
        .err-text
          color: red
</style>
