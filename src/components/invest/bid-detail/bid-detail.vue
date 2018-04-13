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
          <h5 class="text">标的总额</h5>
          <p>{{bidDetail.accountStr}}元</p>
        </div>
        <div class="item">
          <h5 class="text">可投余额</h5>
          <p>{{bidDetail.leftAccountYesStr}}元</p>
        </div>
        <div class="item">
          <h5 class="text">投资奖励</h5>
          <p>无</p>
        </div>
      </div>
    </div>
    <!--还款方式-->
    <div class="bid-intro">
      <ul>
        <li>还款方式：{{bidDetail.styleStr}}</li>
        <li>起息时间：{{bidDetail.startInterestTimeStr | formatDate}}</li>
        <li>最高投标：{{bidDetail.mostAccountStr}}元</li>
        <li>最低投标：{{bidDetail.lowestAccountStr}}元</li>
      </ul>
    </div>
    <!--描述-->
    <div class="bid-desc">
      <ul>
        <li @click="handleClick('desc')">借款描述<i class="el-icon-arrow-right"></i></li>
        <li @click="handleClick('borrow')">借款资料<i class="el-icon-arrow-right"></i></li>
        <li @click="handleClick('record')">投资记录<i class="el-icon-arrow-right"></i></li>
      </ul>
    </div>
    <!--立即投资-->
    <div class="invest-btn">
      <a href="/invest/investment">立即投资</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from 'base/header/header'
  import {getData, getCookie} from 'api/post'
  import {formatDate} from 'common/js/common'
  export default{
    data(){
      return {
        title: '',
        bidDetail: ''
      }
    },
    mounted(){
      const isLogin = getCookie('token')
      let token = ''
      if (isLogin) {
        token = isLogin
      }
      getData('/invest/detail', token, {id: this.$route.query.id}).then(res => {
        if (res.data.success && res.data.code === '0') {
          this.bidDetail = res.data.data
          if (this.bidDetail.id === 3263){
            this.bidDetail.name = '热门标的'
          }
          this.title = this.bidDetail.name
        } else if (res.data.code === 'c017' || res.data.code === 'c012') {
          this.$router.push('/login')
        } else if (res.data.code === 'c030') {
          // 标的不存在
          this.$router.push('/invest/list')
        } else if (res.data.code === 'c031') {
          // 参数缺失
          this.$router.push('/invest/list')
        }
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
    margin-top: 60px
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
    .invest-btn
      height: 50px
      line-height: 50px
      width: 100%
      text-align: center
      background: #ff721f
      a
        color: #fff

</style>
