<template>
  <div class="red-envelope">
    <Header :title="title"></Header>
    <div class="red-envelope-content">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="投资红包" name="red">
          <div class="red" v-for="(item,index) in red.list" :key="index">
            <el-row>
              <el-col :span="8" class="amount">
                <span>{{item.amountStr}}</span>元
              </el-col>
              <el-col :span="8" class="invest">
                {{item.minInvestMonthStr}}
              </el-col>
              <el-col :span="8" class="status">
                {{item.expiredTimeStr}}
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="加息券" name="rateCoupon">
          <div class="rateCoupon" v-for="(item,index) in rateCoupon.list" :key="index">
            <el-row>
              <el-col :span="8" class="amount">
                <span>{{item.upAprStr}}</span>%
              </el-col>
              <el-col :span="8" class="invest">
                {{item.minInvestMonthStr}}
              </el-col>
              <el-col :span="8" class="status">
                {{item.expiredTimeStr}}
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="体验金" name="expMoney">
          <div class="expMoney">
            <el-row>
              <el-col :span="6">时间</el-col>
              <el-col :span="6">金额</el-col>
              <el-col :span="6">有效期</el-col>
              <el-col :span="6">备注</el-col>
            </el-row>
            <el-row class="expMoney-content"  v-for="(item,index) in expMoney.list" :key="index">
              <el-col :span="6">{{item.getTimeStr | _formatDate}}</el-col>
              <el-col :span="6">{{item.expStr}}</el-col>
              <el-col :span="6">{{item.expiredTimeStr}}</el-col>
              <el-col :span="6">{{item.remark}}</el-col>
            </el-row>
            <el-row class="model-intro">
              <el-col :span="12" :offset="12" class="btn">
                <el-button type="text" @click="centerDialogVisible = true">体验金使用说明</el-button>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <el-dialog
      title=""
      :visible.sync="centerDialogVisible"
      width="80%"
      center>
      <div>
        <p>体验金使用规则：</p>
        <p>体验金是由米金社平台用自有资金设立的一个专门用于提供给平台客户进行平台项目投资体验的基金，只能投资体验标，使用后收益归用户所有。实际投资金额满100元，收益可全部提现；</p>
        <p>体验金有效期为30天，如未使用，30天后系统自动回收未使用的体验金；</p>
        <p>用户参与米金社的各种活动，可以获得体验金，活动不定期举行，请关注米金社主页。</p>
      </div>
    </el-dialog>
  </div>
</template>
<script type="text/ecmascript-6">
  import Header from 'base/header/header'
  import {getData} from 'api/post'
  import {formatDate} from 'common/js/common'
  export default{
    data(){
      return {
        title: '我的优惠',
        activeName: 'red',
        red: {},
        rateCoupon: {},
        expMoney: {},
        centerDialogVisible: false
      }
    },
    mounted(){
      this._getRed()
    },
    methods: {
      handleClick(tab, event) {
        if (tab.index === '0') {
          this._getRed()
        } else if (tab.index === '1') {
          this._getRateCoupon()
        } else {
          this._getExpMoneys()
        }
      },
      _getRed(){
        getData('/account/redEnvelopeList', 1, {pageNo: 1, pageSize: 10}).then(res => {
          if (res.data.success && res.data.code === '0') {
            this.red = res.data.data
            /*
             * status
             * -1 已过期
             * 1 已使用
             * 2 已失效
             *   正常使用
             * */
          } else if (res.data.code === 'c017' || res.data.code === 'c012') {
            this.$router.push('/login')
          }
        })
      },
      _getRateCoupon(){
        getData('/account/upRateList', 1, {pageNo: 1, pageSize: 10}).then(res => {
          if (res.data.success && res.data.code === '0') {
            this.rateCoupon = res.data.data
          } else if (res.data.code === 'c017' || res.data.code === 'c012') {
            this.$router.push('/login')
          }
        })
      },
      _getExpMoneys(){
        getData('/account/expMoneys', 1, {pageNo: 1, pageSize: 10}).then(res => {
          if (res.data.success && res.data.code === '0') {
            this.expMoney = res.data.data
          } else if (res.data.code === 'c017' || res.data.code === 'c012') {
            this.$router.push('/login')
          }
        })
      }
    },
    filters: {
      _formatDate(time){
        return formatDate(time * 1000, 0)
      }
    },
    components: {Header}
  }
</script>

<style lang="stylus">
  .red-envelope
    background: #fff
    .red-envelope-content
      margin: 60px 0
      .el-tabs__nav-scroll
        display: flex
        justify-content: center
      .el-tabs__content
        padding: 0 20px
        .red, .rateCoupon
          padding: 10px 0
          margin: 2px 0
          .amount
            text-align: left
          .invest
            text-align: center
            font-size: 12px
          .status
            text-align: right
        .expMoney
          .expMoney-content
            padding: 10px 0
            font-size: 12px
        .model-intro
          .btn
            text-align: right

</style>
