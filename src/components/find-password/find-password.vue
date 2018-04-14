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
            <ImgVerify class="img-verify" @printCanvas="imgVerify"></ImgVerify>
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
  import ImgVerify from 'base/img-verify/img-verify'
  import Header from 'base/header/header'
  import {regPhone} from 'common/js/common'
  export default{
    data(){
      let validateCode = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('验证码不能为空'))
        } else if (value.toUpperCase() !== this.verifyCode) {
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
    mounted(){

    },
    methods: {
      handleSubmit(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push({path: '/findpwdNext', query: {phone: this.ruleForm.phone}})
          } else {
            return false
          }
        })
      },
      // 接收子组件传递的参数
      imgVerify(verifyCode) {
        this.verifyCode = verifyCode
        console.log(this.verifyCode)
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
        button
          width: 100%
        .verify
          position: relative
          .img-verify
            position: absolute
            top: 0
            right: 0
</style>
