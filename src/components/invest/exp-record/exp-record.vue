<template>
  <div class="record-list">
    <Header :title="title"></Header>
    <ul class="content">
      <li v-for="(item,index) in list" :key="item.investTimeStr">
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
        list: []
      }
    },
    mounted(){
      const data = {
        id: this.$route.query.id,
        pageNo: 1,
        pageSize: 10
      }
      getData('/investExp/expTenderList', '', data).then(res => {
        if (res.data.success && res.data.code === '0') {
          this.list = res.data.data.list
        } else if (res.data.code === 'c030') {
          this.$router.push('/invest/list')// 标的不存在
        } else if (res.data.code === 'c031') {
          this.$router.push('/invest/list') // 参数缺失
        }
      })
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
      margin: 72px 0
      li
        background: #fff
        margin: 10px 0
        padding: 10px 5px
        .first-row
          margin-bottom: 10px
        .rank
          text-align: center
        .txt-left
          text-align: left
        .txt-right
          text-align: right
</style>
