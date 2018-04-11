<template>
  <div class="money-record">
    <Header :title="title"></Header>
    <div class="money-record-content">
      <el-row v-for="(item,index) in record" :key="index" class="row-content">
        <el-col :span="24">
          <el-row class="row-content-margin">
            <el-col :span="12">{{item.typeStr}}</el-col>
            <el-col :span="12" class="text-right">￥{{item.moneyStr}}</el-col>
          </el-row>
          <el-row class="row-content-margin">
            <el-col :span="12" class="font-12">{{item.dealTimeStr | _formatDate}}</el-col>
            <el-col :span="12" class="text-right font-12 remark-btn">备注</el-col>
          </el-row>
          <el-row class="row-content-margin">
            <el-col :span="24" class="remark font-12">{{item.remark}}</el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from 'base/header/header'
  import {getData} from 'api/post'
  import {formatDate} from 'common/js/common'
  export default{
    data(){
      return {
        title: '资金记录',
        record: []
      }
    },
    mounted(){
      this._getData()
    },
    methods: {
      _getData(){
        const data = {
          endTime: '',
          pageNo: 1,
          pageSize: 10,
          startTime: '',
          timeSelect: '',
          tradeType: ''
        }
        getData('/account/myAccountLogList', 1, data).then(res => {
          if (res.data.success && res.data.code === '0') {
            this.record = res.data.data.list
          } else if (res.data.code === 'c017') {
            this.$router.push('/login')
          }
        })
      }
    },
    filters: {
      _formatDate(time){
        return formatDate(time * 1000, 2)
      }
    },
    components: {Header}
  }
</script>

<style lang="stylus">
  .money-record
    .money-record-content
      margin: 65px 0
      .row-content
        padding: 10px 20px
        background: #fff
        margin: 5px 0
        .row-content-margin
          margin: 8px
          .text-right
            text-align: right
          .remark
            word-break: break-all;
            line-height: 20px
          .font-12
            font-size: 12px
          .remark-btn
            color: #0094FF
</style>
