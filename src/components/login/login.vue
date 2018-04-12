<template>
  <div class="login">
    <div class="logo">
      <img src="./logo.png" alt="" width="80" height="80">
    </div>
    <div class="login-form">
      <el-form>
        <div class="login-form-group">
          <el-input type="text"
                    placeholder="请输入手机号码"
                    prefix-icon="el-icon-account"
                    v-model="userName"
                    :maxlength="11">

          </el-input>
        </div>
        <div class="login-form-group">
          <el-input type="password"
                    placeholder="请输入密码"
                    prefix-icon="el-icon-password"
                    v-model="passWord"
                    :maxlength="16">

          </el-input>
        </div>
        <div class="login-form-group">
          <el-alert :title="errText"
                    type="error"
                    v-show="errShow"
                    :closable="false">

          </el-alert>
        </div>
        <div class="login-form-group">
          <el-button type="primary" @click="handleSubmit">登录</el-button>
        </div>
        <div class="login-form-group">
          <el-row>
            <el-col :span="12" class="txt-left">
              <router-link to="">忘记密码</router-link>
            </el-col>
            <el-col :span="12" class="txt-right">
              <router-link to="">立即注册</router-link>
            </el-col>
          </el-row>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getData, setCookie, clearCookie} from 'api/post'

  export default {
    data() {
      return {
        userName: '',
        passWord: '',
        errShow: false,
        errText: ''
      }
    },
    methods: {
      handleSubmit(){
        const data = {
          userName: this.userName,
          passWord: this.passWord
        }
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
            this.errShow = true
            this.errText = res.msg
          }
        })
      }

    },
    mounted(){
      // 清除缓存
      clearCookie('token')
    }
  }
</script>

<style lang="stylus">
  .login
    /*background: #fff*/
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
        .txt-left
          text-align: left
          a
            color: #ff5f0f
        .txt-right
          text-align: right
          a
            color: #ff5f0f
      .el-input--prefix
        .el-input__inner
          padding: 10px 30px
          line-height: normal

</style>
