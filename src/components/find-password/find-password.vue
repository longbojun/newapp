<template>
  <div class="find-password">
    <Header :title="title"></Header>
    <div class="find-password-content">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <div class="login-form-group">
          <el-form-item prop="userName" ref="userName">
            <el-input type="text"
                      placeholder="请输入手机号码"
                      prefix-icon="el-icon-account"
                      v-model="ruleForm.phone"
                      :maxlength="11">
            </el-input>
          </el-form-item>
        </div>
        <div class="login-form-group">
          <el-form-item prop="passWord" ref="passWord" class="password">
            <el-input type="password"
                      placeholder="验证码"
                      prefix-icon="el-icon-password"
                      v-model="ruleForm.verification"
                      :maxlength="16">
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
  //  import {getData} from 'api/post'
  import {regPhone} from 'common/js/common'
  export default{
    data(){
      return {
        title: '找回密码',
        ruleForm: {
          phone: '',
          verification: ''
        },
        rules: {
          phone: [
            {required: true, message: '请输入手机号码', trigger: 'blur'},
            {max: 11, message: '请输入正确的手机号码', trigger: 'blur'},
            {pattern: regPhone(), message: '暂不支持该号段', trigger: 'blur'}
          ],
          verification: [
            {required: true, message: '请输入验证码', trigger: 'blur'}
          ]
        }
      }
    },
    mounted(){

    },
    methods: {
      handleSubmit(formName){
      },
      // 接收子组件传递的参数
      imgVerify(verifyCode){
        console.log(verifyCode)
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
        .password
          position: relative
          .img-verify
            position: absolute
            top: 0
            right: 0
</style>
