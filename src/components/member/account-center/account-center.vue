<template>
  <div class="m-center">
    <div class="m-data">
      <div class="m-top">
        <el-row>
          <el-col :span="20">用户名:{{data.loginName}}</el-col>
          <el-col :span="4">
            <div class="msg"><i class="el-icon-message"></i></div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">账户总额（元）</el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="remain">{{data.totalStr}}</div>
          </el-col>
          <el-col :span="12">
            <div class="recharge"><a href="javascript:;" class="recharge-btn">充值</a></div>
          </el-col>
        </el-row>
      </div>
      <div class="m-bottom">
        <el-row class="m-detail">
          <el-col :span="8">
            <h6 class="text">今日净收益</h6>
            <p class="detail">{{data.earnMoneyDay}}</p>
          </el-col>
          <el-col :span="8">
            <h6 class="text">累计净收益</h6>
            <p class="detail">{{data.earnMoney}}</p>
          </el-col>
          <el-col :span="8">
            <h6 class="text">累计投资金额</h6>
            <p class="detail">{{data.totleTenderMoney}}</p>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="m-list">
      <el-row v-for="item in list" :key="item.name" @click.native="handleClick(item.path)">
        <el-col :span="6">
          <div>
            <img :src="item.img">
          </div>
        </el-col>
        <el-col :span="16">
          <div class="text">{{item.name}}</div>
        </el-col>
        <el-col :span="2"><i class="el-icon-arrow-right"></i></el-col>
      </el-row>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getData} from 'api/post'
  export default{
    data(){
      return {
        data: {},
        list: [
          {
            name: '投资记录',
            img: 'https://static.yinmimoney.com/yinmi/images/weixin/images/account_1.png',
            path: 'record'
          },
          {
            name: '我的资产',
            img: 'https://static.yinmimoney.com/yinmi/images/weixin/images/account_2.png',
            path: 'assets'
          },
          {
            name: '资金记录',
            img: 'https://static.yinmimoney.com/yinmi/images/weixin/images/account_3.png',
            path: 'moneyRecord'
          },
          {name: '自动投标', img: 'https://static.yinmimoney.com/yinmi/images/weixin/images/account_4.png', path: 'autoInvest'},
          {name: '我的优惠', img: 'https://static.yinmimoney.com/yinmi/images/weixin/images/account_5.png', path: 'redEnvelope'},
          {name: '投资项目', img: 'https://static.yinmimoney.com/yinmi/images/weixin/images/account_6.png', path: 'investItem'},
          {name: '账户设置', img: 'https://static.yinmimoney.com/yinmi/images/weixin/images/account_7.png', path: 'settings'},
          {name: '邀请好友', img: 'https://static.yinmimoney.com/yinmi/images/weixin/images/account_8.png', path: 'inviteFriends'},
          {name: '我的地址', img: 'https://static.yinmimoney.com/yinmi/images/weixin/images/account_10.png', path: 'address'},
          {name: '调查问卷', img: 'https://static.yinmimoney.com/yinmi/images/weixin/images/survey.png', path: ''}
        ]
      }
    },
    mounted(){
      getData('/account/myAssets', true).then(res => {
        res = res.data
        if (res.code === 'c017') {
          this.$router.push('/login')
        } else {
          this.data = res.data
        }
      })
    },
    methods: {
      handleClick(path){
        console.log(path)
        this.$router.push({path: path})
      }
    }
  }
</script>

<style lang="stylus">
  .m-center
    background: #fff
    .m-data
      .m-top
        padding: 20px 10px 5px 10px
        color: #fff
        background: #ff5f0f
        .el-row
          margin-bottom: 20px
          .remain
            height: 28px
            line-height: 28px
          .msg, .recharge
            text-align: right
            .recharge-btn
              display: inline-block;
              padding: 5px;
              color: #fff
              border: 1px solid #fff;
      .m-bottom
        background: #bd480d
        padding: 20px 0
        color: #fff
        .el-col-8
          text-align: center
          .text
            margin-bottom: 10px

    .m-list
      .el-row
        padding: 10px 5px
        img
          width: 30px
          height: 30px
        .text, .el-icon-arrow-right
          height: 30px
          line-height: 30px
</style>
