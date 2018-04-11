<template>
  <div class="invest-item">
    <Header :title="title"></Header>
    <div class="content">
      <el-row v-for="item in invest.list" :key="item.bId" class="content-item">
        <el-col :span="24" class="content-item-header">
          <h5 class="mb-10">{{item.name}}</h5>
          <el-row class="mb-10">
            <el-col :span="20">
              <el-progress :percentage="Number(item.scalesStr)" :show-text="false"></el-progress>
            </el-col>
            <el-col :span="4" class="txt-right">{{Number(item.scalesStr)}}%</el-col>
          </el-row>
          <el-row class="mb-10">
            <el-col :span="20">投资总额:</el-col>
            <el-col :span="4" class="txt-right">￥{{item.sumMoneyStr}}</el-col>
          </el-row>
          <el-row class="mb-10">
            <el-col :span="20">已回款:</el-col>
            <el-col :span="4" class="txt-right">￥{{item.sumRepaymentYesAccountStr}}</el-col>
          </el-row>
          <el-row class="mb-10">
            <el-col :span="20">待还款:</el-col>
            <el-col :span="4" class="txt-right txt-color">￥{{item.sumWaitAccountStr}}</el-col>
          </el-row>
        </el-col>
        <el-col :span="24" class="content-item-footer">
          <h5 class="title">借款协议已使用电子签名，请用Adobe阅读器浏览</h5>
          <el-row>
            <el-col :span="16" :offset="12">
              <el-button type="text" size="small" disabled v-if="item.contractUrl">合同生成中</el-button>
              <el-button type="plain" size="small" v-else>下载协议</el-button>
              <el-button type="primary" size="small">回款计划</el-button>
            </el-col>
          </el-row>
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
        title: '投资项目',
        invest: {}
      }
    },
    mounted(){
      this._getData()
    },
    methods: {
      _getData(){
        getData('/account/myInvestProject', 1, {pageNo: 1, pageSize: 10}).then(res => {
          if (res.data.success && res.data.code === '0') {
            this.invest = res.data.data
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
  .invest-item
    .content
      margin: 70px 0
      .content-item
        .content-item-header
          padding: 10px 20px
          /*margin: 10px 0*/
          background: #fff
          border-bottom: 2px solid #f4f4f4
          .mb-10
            margin-bottom: 10px
            .txt-right
              text-align: right
            .txt-color
              color: #FF5400
        .content-item-footer
          padding: 10px 20px
          margin-bottom: 10px
          background: #fff
          border-bottom: 2px solid #f4f4f4
          .title
            margin: 20px 0
            font-size: 12px
</style>
