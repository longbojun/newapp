<template>
  <div class="login">
    <div class="logo">
      <img src="./logo.png" alt="" width="80" height="80">
    </div>
    <div class="login-form">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <div class="login-form-group">
          <el-form-item prop="userName" ref="userName">
            <el-input type="text"
                      placeholder="请输入手机号码"
                      prefix-icon="el-icon-account"
                      v-model="ruleForm.userName"
                      :maxlength="11">
            </el-input>
          </el-form-item>
        </div>
        <div class="login-form-group">
          <el-form-item prop="passWord" ref="passWord">
            <el-input type="password"
                      placeholder="请输入密码"
                      prefix-icon="el-icon-password"
                      v-model="ruleForm.passWord"
                      :maxlength="16">
            </el-input>
          </el-form-item>
        </div>
        <div class="login-form-group">
          <el-button type="primary" @click="handleSubmit('ruleForm')">登录</el-button>
        </div>
        <div class="login-form-group">
          <el-row>
            <el-col :span="12" class="txt-left">
              <router-link to="/findpwd">忘记密码</router-link>
            </el-col>
            <el-col :span="12" class="txt-right">
              <router-link to="/regsister">立即注册</router-link>
            </el-col>
          </el-row>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getData, setCookie, clearCookie} from 'api/post'
  import {regPhone} from 'common/js/common'

  export default {
    data() {
      return {
        ruleForm: {
          userName: '',
          passWord: ''
        },
        rules: {
          userName: [
            {required: true, message: '请输入手机号码', trigger: 'blur'},
            {max: 11, message: '请输入正确的手机号码', trigger: 'blur'},
            {pattern: regPhone(), message: '暂不支持该号段', trigger: 'blur'}
          ],
          passWord: [
            {required: true, message: '请输入您的密码', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handleSubmit(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const data = {
              userName: this.ruleForm.userName,
              passWord: this.ruleForm.passWord
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
                if (res.code === 'c004') {
                  this.$refs.userName.error = res.msg
                } else if (res.code === 'c006') {
                  this.$refs.passWord.error = res.msg
                }
//                  this.$refs.errorText.error = res.msg
//                  console.log( this.$refs[formName])
//                this.rules.passWord[0].message = res.msg
//                this.errShow = true
//                this.errText = res.msg
              }
            })
          } else {
            console.log('erro submit')
            return false
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
