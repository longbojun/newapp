<template>
  <div class="register">
    <Header :title="title"></Header>
    <div class="register-content">
      注册页面
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from 'base/header/header'
//  import {getData} from 'api/post'
  import {regPhone} from 'common/js/common'
  export default{
    data(){
      return {
        title: '注册',
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
    mounted(){
    },
    mothods: {
      _getData(){
      }
    },
    components: {Header}
  }
</script>

<style lang="stylus">
  .register
    margin-top: 60px
</style>
