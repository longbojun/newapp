<template>
  <div class="find-password">
    <Header :title="title"></Header>
    <div class="find-password-content">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <div class="login-form-group">
          <el-form-item prop="phone" ref="phone">
            <el-input type="text"
                      placeholder="请输入手机号码"
                      v-model="ruleForm.phone"
                      :maxlength="11">
            </el-input>
          </el-form-item>
        </div>
        <div class="login-form-group">
          <el-form-item prop="verify" ref="verify" class="verify">
            <el-input type="text"
                      placeholder="验证码"
                      v-model="ruleForm.verify"
                      :maxlength="4">
            </el-input>
            <ImgVerify class="img-verify" @imgCode="imgCode" ref="imgVerify"></ImgVerify>
          </el-form-item>
        </div>
        <div class="login-form-group">
          <el-button type="primary" @click="handleSubmit('ruleForm')">下一步</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import ImgVerify from 'base/v-img-verify/v-img-verify'
  import Header from 'base/header/header'
  import {regPhone} from 'common/js/common'
  import {getData} from 'api/post'

  export default {
    data() {
      let validateCode = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('验证码不能为空'))
        } else if (value.toUpperCase() !== this.verifyCode) {
          this.$refs.imgVerify.draw()
          return callback(new Error('验证码输入有误'))
        } else {
          callback()
        }
      }
      return {
        title: '找回密码',
        verifyCode: '',
        ruleForm: {
          phone: '',
          verify: ''
        },
        rules: {
          phone: [
            {required: true, message: '请输入手机号码', trigger: 'blur'},
            {max: 11, message: '请输入正确的手机号码', trigger: 'blur'},
            {pattern: regPhone(), message: '暂不支持该号段', trigger: 'blur'}
          ],
          verify: [
            {validator: validateCode, trigger: 'blur'}
          ]
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
            return false
          }
        })
      },
      // 接收子组件传递的参数
      imgCode(verifyCode) {
        this.verifyCode = verifyCode
//        console.log(this.verifyCode)
      },
      _getData() {
        getData('/findpwd/validate', '', {mobile: this.ruleForm.phone}).then(res => {
          if (res.data.success && res.data.code === '0') {
            this.$router.push({path: '/findpwdNext', query: {phone: this.ruleForm.phone}})
          } else {
            this.$refs.verify.error = res.data.msg
          }
        })
      }
    },
    components: {
      Header,
      ImgVerify
    }
  }
</script>

<style lang="stylus">
  .find-password
    margin-top: 60px
    .find-password-content
      padding: 20px 10px
      .login-form-group
        .el-input__inner
          line-height: normal
        button
          width: 100%
        .verify
          position: relative
          .img-verify
            position: absolute
            top: 0
            right: 0
</style>
