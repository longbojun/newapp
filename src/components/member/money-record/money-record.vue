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
            <el-col :span="12" class="text-right font-12 remark-btn" @click.native="handleToggle">备注</el-col>
          </el-row>
          <el-row class="row-content-margin remark-content">
            <el-col :span="24" class="remark font-12">{{item.remark}}</el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <el-pagination
      @current-change="handleCurrentChange"
      background
      layout="prev, pager, next"
      :page-size="pageSize"
      :total="total">
    </el-pagination>
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
        record: [],
        total: 0,
        pageSize: 10
      }
    },
    mounted(){
      this._getData(1)
    },
    methods: {
      _getData(pageNo){
        const data = {
          endTime: '',
          pageNo: pageNo,
          pageSize: this.pageSize,
          startTime: '',
          timeSelect: '',
          tradeType: ''
        }
        getData('/account/myAccountLogList', 1, data).then(res => {
          if (res.data.success && res.data.code === '0') {
            this.record = res.data.data.list
            this.total = res.data.data.totalCount
          } else if (res.data.code === 'c017') {
            this.$router.push('/login')
          }
        })
      },
      handleCurrentChange(val) {
        this._getData(val)
      },
      handleToggle(e){
        let style = e.toElement.parentElement.nextElementSibling.style.display
        if (style === 'none' || style === '') {
          e.toElement.parentElement.nextElementSibling.style.display = 'block'
        } else {
          e.toElement.parentElement.nextElementSibling.style.display = 'none'
        }
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
      margin-top: 60px
      &:before
        display: table
        content: ''
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
        .remark-content
          display: none
    .el-pagination
      text-align: right
</style>
