<template>
  <div class="reg-next">
    <Header :title="title"></Header>
    <div class="reg-next-content">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <div class="register-form-group">
          <el-form-item class="phone">{{phone}}</el-form-item>
        </div>
        <div class="register-form-group">
          <el-form-item prop="smsCode" ref="smsCode">
            <el-row>
              <el-col :span="16">
                <el-input type="text"
                          placeholder="请输入短信验证码"
                          v-model="ruleForm.smsCode"
                          :maxlength="6">
                </el-input>
              </el-col>
              <el-col :span="8">
                <p class="time" ref="time" @click="flag && getSmsCode()">获取验证码</p>
              </el-col>
            </el-row>
            <el-row>
              <el-alert
                title="*请输入验证码"
                type="error"
                :closable="false"
              >
              </el-alert>
            </el-row>
          </el-form-item>
        </div>
        <div class="register-form-group">
          <el-form-item prop="password" ref="password" class="password">
            <el-row>
              <el-input type="text"
                        placeholder="请输入密码"
                        v-model="ruleForm.password"
                        :maxlength="16">
              </el-input>
            </el-row>
            <el-row>
              <el-alert
                title="*请输入4-16位字符，由英文字母、数字组成，不能为纯数字"
                type="error"
                :closable="false"
                style="line-height: 16px;text-align: justify"
              >
              </el-alert>
            </el-row>
          </el-form-item>
        </div>
        <div class="register-form-group">
          <el-form-item>
            <el-collapse accordion>
              <el-collapse-item>
                <template slot="title">邀请码</template>
                <el-input
                  type="text"
                  placeholder="请输入邀请码"
                  v-model="ruleForm.inviteCode"
                ></el-input>
              </el-collapse-item>
            </el-collapse>
          </el-form-item>
        </div>
        <div class="register-form-group">
          <el-form-item>
            <el-button type="primary" @click="handleSubmit('ruleForm')">立即注册</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from 'base/header/header'
  import {getData} from 'api/post'
  export default{
    data() {
      let validatePassword = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入您的密码'))
        } else {
          callback()
        }
      }
      return {
        title: '注册',
        phone: this.$route.query.phone,
        ruleForm: {
          smsCode: '',
          password: '',
          inviteCode: ''
        },
        rules: {
          smsCode: [
            {required: true, message: '请输入短信验证码', trigger: 'blur'},
            {max: 6, message: '短信验证码为6位数字', trigger: 'blur'}
          ],
          password: [
            {validator: validatePassword, trigger: 'blur'}
          ]
        },
        flag: true
      }
    },
    mounted(){
      this.countDown()
    },
    methods: {
      handleSubmit(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this._getData()
          } else {
            return false
          }
        })
      },
      _getData(){
        const data = {
          mobile: this.$route.query.phone,
          licence: this.$route.query.licence,
          smsCode: this.ruleForm.smsCode,
          pwd: this.ruleForm.password,
          inviteCode: this.ruleForm.inviteCode
        }
        getData('/regist/smsRetry', '', data).then(res => {
          if (res.data.success && res.data.code === '0') {
            this.$router.push('/login')
          } else if (res.data.code === 'a007') {
            this.$router.push('/register')
          } else {
            this.$refs.password.error = res.data.msg
          }
        })
      },
      getSmsCode(){
        this.countDown()
      },
      countDown(){
        this.flag = false
        let t = 60
        this.time = setInterval(() => {
          t--
          if (t === 0) {
            clearInterval(this.time)
            this.$refs.time.innerHTML = '获取验证码'
            t = 60
            this.flag = true
          } else {
            this.$refs.time.innerHTML = `${t}s`
          }
        }, 1000)
      }
    },
    components: {Header}
  }
</script>

<style lang="stylus">
  .reg-next
    .reg-next-content
      margin-top: 60px
      padding: 20px 30px
      .register-form-group
        .phone
          text-align: center
        button
          width: 100%
      .time
        text-align: center
        background-color: #fff
        height: 38px
        border: 1px solid #dcdfe6
      .el-collapse-item__header
        padding-left: 15px
      .el-collapse-item__content
        padding-bottom: 0
</style>
