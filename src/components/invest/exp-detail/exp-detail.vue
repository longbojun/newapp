<template>
  <div class="bid-detail">
    <Header :title="title"></Header>
    <div class="bid-main">
      <div class="bid-num">
        <div class="bid-num-left">
          <h2>预期化收益</h2>
          <p><span>{{bidDetail.aprStr}}</span>%</p>
        </div>
        <div class="bid-num-right">
          <h2>{{bidDetail.timeLimitStr}}</h2>
          <p>投资期限</p>
        </div>
      </div>
      <div class="bid-money">
        <div class="item">
          <h5 class="text">账户体验金余额</h5>
          <p>0.00元</p>
        </div>
        <div class="item">
          <h5 class="text">投标人数</h5>
          <p>{{bidDetail.investPersons}}人</p>
        </div>
        <div class="item">
          <h5 class="text">投资期限</h5>
          <p>{{bidDetail.timeLimitStr}}</p>
        </div>
      </div>
    </div>
    <!--还款方式-->
    <div class="bid-intro">
      <ul>
        <li>还款方式：{{bidDetail.styleStr}}</li>
        <li>发布时间：{{bidDetail.releaseTimeStr | formatDate}}</li>
        <li>计息起息日：即投机即起息</li>
      </ul>
    </div>
    <!--描述-->
    <div class="bid-desc">
      <ul>
        <li @click="handleClick('expDesc')">借款描述<i class="el-icon-arrow-right"></i></li>
        <li @click="handleClick('expRecord')">投资记录<i class="el-icon-arrow-right"></i></li>
      </ul>
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
        title: '',
        bidDetail: ''
      }
    },
    mounted(){
      getData('/investExp/expDetail', '', {id: this.$route.query.id}).then(res => {
        this.bidDetail = res.data.data
        this.title = this.bidDetail.name
      })
    },
    methods: {
      handleClick(param){
        const id = this.$route.query.id
        this.$router.push({path: param, query: {id: id}})
      }
    },
    filters: {
      formatDate(time){
        return formatDate(time * 1000, 0)
      }
    },
    components: {
      Header
    }
  }
</script>

<style lang="stylus">
  .bid-detail
    margin: 60px 0
    .bid-main
      background: linear-gradient(to bottom, #ff721f 0, #ff862a 100%);
      .bid-num
        display: flex
        align-items center
        justify-content: space-between
        padding: 20px 10px
        color: #fff
        .bid-num-left
          h2
            font-size: 12px
            margin-bottom: 10px
          p
            line-height: 50px
            span
              font-size: 50px
        .bid-num-right
          h2
            margin-bottom: 10px
          h2, p
            font-size: 14px
      .bid-money
        display: flex
        align-items: center
        justify-content: space-around
        padding: 10px 0
        background: #ff9641
        color: #fff
        .item
          text-align: center
          h5
            margin-bottom: 10px
    .bid-intro
      margin-bottom: 1px
      padding: 10px
      background: #fff
      ul li
        padding: 8px 0
        color: #666
    .bid-desc
      background: #fff
      ul
        li
          padding: 10px
          height: 25px
          line-height: 25px
          border-bottom: 1px solid #f4f4f4
          color: #666
          .el-icon-arrow-right
            float: right
            margin-top: 8px
</style>
