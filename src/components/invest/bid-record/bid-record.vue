<template>
  <div class="record-list">
    <Header :title="title"></Header>
    <ul class="content">
      <li v-for="(item,index) in list" :key="item.investTimeStr" class="content-item">
        <el-row>
          <el-col :span="2">
            <div class="rank">{{index}}</div>
          </el-col>
          <el-col :span="22">
            <el-row class="first-row">
              <el-col :span="12">
                <div class="txt-left">{{item.hideLoginName}}</div>
              </el-col>
              <el-col :span="12">
                <div class="txt-right">{{item.moneyStr}}元</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <div class="txt-left">{{item.investTimeStr | formatDate}}</div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </li>
    </ul>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      background
      layout="prev, pager, next"
      :page-size="10"
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
        title: '投资记录',
        list: [],
        total: 0
      }
    },
    mounted(){
      this._getData(1, 10)
    },
    methods: {
      _getData(pageNo, pageSize){
        let data = {
          id: this.$route.query.id,
          pageNo: pageNo,
          pageSize: pageSize
        }
        getData('/invest/investRecord', '', data).then(res => {
          if (res.data.success && res.data.code === '0') {
            this.list = res.data.data.list
            this.total = res.data.data.totalCount
          }
        })
      }
    },
    filters: {
      formatDate(time){
        return formatDate(time * 1000, 2)
      }
    },
    components: {
      Header
    }
  }
</script>

<style lang="stylus">
  .record-list
    .content
      margin-top: 60px
      &:before
        display: table
        content: ''
      .content-item
        margin: 12px 0
        padding: 10px 5px
        background: #fff
        .first-row
          margin-bottom: 10px
        .rank
          text-align: center
        .txt-left
          text-align: left
        .txt-right
          text-align: right
    .el-pagination
      margin: 20px 0
      text-align: right
</style>
