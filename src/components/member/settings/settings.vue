<template>
  <div class="settings">
    <Header :title="title"></Header>
    <div class="content">
      <el-row class="content-item">
        <el-col :span="12">手机号码</el-col>
        <el-col :span="12" class="txt-right">{{settings.mobilePhone}}</el-col>
      </el-row>
      <el-row class="content-item content-mb-20">
        <el-col :span="12">银行存管</el-col>
        <el-col :span="12" class="txt-right">查看<i class="el-icon-arrow-right"></i></el-col>
      </el-row>
      <el-row class="content-item">
        <el-col :span="12">登录密码</el-col>
        <el-col :span="12" class="txt-right">修改<i class="el-icon-arrow-right"></i></el-col>
      </el-row>
      <el-row class="content-item">
        <el-col :span="12">交易密码</el-col>
        <el-col :span="12" class="txt-right">修改<i class="el-icon-arrow-right"></i></el-col>
      </el-row>
      <el-row>
        <el-col :span="24" class="logout-btn">
          <el-button type="primary">退出登录</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from 'base/header/header'
  import {getData} from 'api/post'
  export default{
    data(){
      return {
        title: '账户设置',
        settings: {}
      }
    },
    mounted(){
      this._getData()
    },
    methods: {
      _getData(){
        getData('/settings/pc/findList', 1).then(res => {
          if (res.data.success && res.data.code === '0') {
            this.settings = res.data.data.settingsInfo
          } else if (res.data.code === 'c017' || res.data.code === 'c012') {
            this.$router.push('/login')
          }
        })
      }
    },
    components: {Header}
  }
</script>

<style lang="stylus">
  .settings
    .content
      margin: 60px 0
      &:before
        display: table
        content: ''
      .content-item
        margin: 2px 0
        padding: 20px 10px
        background: #fff
        .txt-right
          text-align: right
      .content-mb-20
        margin-bottom: 20px
      .logout-btn
        margin: 20px 0
        padding: 0 10px
        .el-button--primary
          width: 100%
</style>
