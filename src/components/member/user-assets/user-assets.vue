<template>
  <div class="assets">
    <Header :title="title"></Header>
    <div class="assets-content">
      <el-row class="total">
        <el-col :span="24">
          <h5 class="title">账户总资产（元）</h5>
          <p class="text">{{total.totalStr}}</p>
        </el-col>
      </el-row>
      <el-row class="use-money">
        <el-col :span="12">
          <h5 class="title">可用余额（元）</h5>
          <p class="text">{{total.useMoneyStr}}</p>
        </el-col>
        <el-col :span="12">
          <h5 class="title">冻结金额（元）</h5>
          <p class="text">{{total.noUseMoneyStr}}</p>
        </el-col>
      </el-row>
      <el-row class="invest-money">
        <el-col :span="12">
          <h5 class="title">在投金额（元）</h5>
          <p class="text">{{total.investMoneyStr}}</p>
        </el-col>
        <el-col :span="12">
          <h5 class="title">待收总额（元）</h5>
          <p class="text">{{total.collectionStr}}</p>
        </el-col>
      </el-row>
      <el-row class="btn">
        <el-col :span="12"><el-button type="primary" size="medium">充值</el-button></el-col>
        <el-col :span="12"><el-button type="info" size="medium">提现</el-button></el-col>
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
        title: '我的资产',
        total: {}
      }
    },
    mounted(){
      this._getData()
    },
    methods: {
      _getData(){
        getData('/account/myAssetsDetail', 1).then(res => {
          if (res.data.success && res.data.code === '0') {
            this.total = res.data.data
          } else if (res.data.code === 'c017' || res.data.code === 'c012') {
            this.$router.push('/login')
          }
        })
      }
    },
    components: {
      Header
    }
  }
</script>

<style lang="stylus">
  .assets
    .assets-content
      margin: 60px 0
      .total
        margin-bottom: 1px
        background: #fff
        padding: 25px
        .title
          margin-bottom: 20px
          font-size: 12px
          color: #999
        .text
          font-size: 28px
          color: #ff5f0f
      .use-money
        padding: 20px 25px
        margin-bottom: 10px
        background: #fff
        .title
          font-size: 12px
          color: #999
          margin-bottom: 10px
        .text
          font-size: 12px
      .invest-money
        padding: 20px 25px
        margin-bottom: 50px
        background: #fff
        .title
          font-size: 12px
          color: #999
          margin-bottom: 10px
        .text
          font-size: 12px
      .btn
        .el-col
          padding: 0 5px
          .el-button--medium
            width: 100%
</style>
