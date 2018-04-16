<template>
  <div class="findpwd-next">
    <Header :title="title"></Header>
    <div class="findpwd-next-content">
      <div class="login-form">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
          <div class="login-form-group">
            <el-form-item class="tip">
              <p>校验码已发送至您的手机：{{this.phone}}</p>
              <p>请输入校验码完成密码重置</p>
            </el-form-item>
            <el-form-item class="tip">
              <p>若没有收到，请&nbsp;
                <router-link to="/findpwd" class="findpwd-btn">返回</router-link>&nbsp;尝试
              </p>
            </el-form-item>
          </div>
          <div class="login-form-group">
            <el-form-item prop="verifyCode" ref="verifyCode">
              <el-input type="text"
                        placeholder="短信验证码"
                        v-model="ruleForm.verifyCode"
                        :maxlength="6">
              </el-input>
            </el-form-item>
          </div>
          <div class="login-form-group">
            <el-form-item prop="password" ref="password">
              <el-input type="password"
                        placeholder="新密码"
                        v-model="ruleForm.password"
                        :maxlength="16">
              </el-input>
            </el-form-item>
          </div>
          <div class="login-form-group">
            <el-form-item prop="confirmPassword" ref="confirmPassword">
              <el-input type="password"
                        placeholder="确认密码"
                        v-model="ruleForm.confirmPassword"
                        :maxlength="16">
              </el-input>
            </el-form-item>
          </div>
          <div class="login-form-group">
            <el-button type="primary" @click="handleSubmit('ruleForm')">下一步</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from 'base/header/header'
  import {getData} from 'api/post'

  export default {
    data() {
      let validateCode = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入短信验证码'))
        } else {
          callback()
        }
      }
      let validatePwd = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入新的密码'))
        } else {
          callback()
        }
      }
      let validateCPwd = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入确认密码'))
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入的密码不一样'))
        } else {
          callback()
        }
      }
      return {
        title: '找回登录密码',
        phone: this.$route.query.phone,
        ruleForm: {
          verifyCode: '',
          password: '',
          confirmPassword: ''
        },
        rules: {
          verifyCode: [{validator: validateCode, trigger: 'blur'}],
          password: [{validator: validatePwd, trigger: 'blur'}],
          confirmPassword: [{validator: validateCPwd, trigger: 'blur'}]
        }
      }
    },
    mounted() {
    },
    methods: {
      handleSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this._getData()
          } else {
            console.error('出错了')
          }
        })
      },
      _getData() {
        const data = {
          mobile: this.$route.query.phone,
          pwd: this.ruleForm.password,
          smsCode: this.ruleForm.verifyCode
        }
        getData('/findpwd/updatePwd', '', data).then(res => {
          if (res.data.success && res.data.code === '0') {
            this.$router.push('/findpwdSuccess')
          } else {
            this.$refs.confirmPassword.error = res.data.msg
          }
        })
      }
    },
    components: {Header}
  }
</script>

<style lang="stylus">
  .findpwd-next
    margin-top: 60px
    .findpwd-next-content
      padding: 20px 10px
      .login-form-group
        .tip
          color: #C8050E
          .el-form-item__content
            line-height: normal
          .findpwd-btn
            font-size: 18px
            color: red
        button
          width: 100%
</style>
