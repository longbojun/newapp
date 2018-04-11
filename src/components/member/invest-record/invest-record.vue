<template>
  <div class="invest-record">
    <Header :title="title"></Header>
    <div class="invest-record-content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="投资中" name="investing">
          <div class="investing">
            <el-card class="box-card" v-for="item in investing" :key="item.bId">
              <div slot="header" class="clearfix">
                <div>
                  <div>{{item.name}}</div>
                  <el-row class="time">
                    <el-col :span="12">
                      <h5>计息起息日：</h5>
                      <p>{{item.startInterestTimeStr}}</p>
                    </el-col>
                    <el-col :span="12">
                      <h5>到期日：</h5>
                      <p>{{item.endAtStr}}</p>
                    </el-col>
                  </el-row>
                </div>
              </div>
              <div class="text item">
                <el-row>
                  <el-col :span="12">年化收益</el-col>
                  <el-col :span="12">{{item.aprStr}}</el-col>
                </el-row>
              </div>
              <div class="text item">
                <el-row>
                  <el-col :span="12">投资金额</el-col>
                  <el-col :span="12">{{item.moneyStr}}</el-col>
                </el-row>
              </div>
              <div class="text item">
                <el-row>
                  <el-col :span="12">已收收益</el-col>
                  <el-col :span="12">{{item.repaymentYesInterest}}</el-col>
                </el-row>
              </div>
              <div class="text item">
                <el-row>
                  <el-col :span="12">待收收益</el-col>
                  <el-col :span="12">{{item.waitInterest}}</el-col>
                </el-row>
              </div>
            </el-card>
          </div>
        </el-tab-pane>
        <el-tab-pane label="已回款" name="returned">
          <div class="investing">
            <el-card class="box-card" v-for="(item,index) in investing" :key="index">
              <div slot="header" class="clearfix">
                <div>
                  <div>{{item.name}}</div>
                  <el-row class="time">
                    <el-col :span="12">
                      <h5>计息起息日：</h5>
                      <p>{{item.startInterestTimeStr}}</p>
                    </el-col>
                    <el-col :span="12">
                      <h5>预计本期回款日：</h5>
                      <p>{{item.endAtStr}}</p>
                    </el-col>
                  </el-row>
                </div>
              </div>
              <div class="text item">
                <el-row>
                  <el-col :span="12">年化收益</el-col>
                  <el-col :span="12">{{item.aprStr}}</el-col>
                </el-row>
              </div>
              <div class="text item">
                <el-row>
                  <el-col :span="12">投资金额</el-col>
                  <el-col :span="12">{{item.moneyStr}}</el-col>
                </el-row>
              </div>
              <div class="text item">
                <el-row>
                  <el-col :span="12">回收本金:</el-col>
                  <el-col :span="12">{{item.capitalStr}}</el-col>
                </el-row>
              </div>
              <div class="text item">
                <el-row>
                  <el-col :span="12">赚取收益:</el-col>
                  <el-col :span="12">{{item.borrowYesInterestTotal}}</el-col>
                </el-row>
              </div>
              <div class="text item">
                <el-row>
                  <el-col :span="12">期数:</el-col>
                  <el-col :span="12">{{item.period}}

                  </el-col>
                </el-row>
              </div>
            </el-card>
          </div>
        </el-tab-pane>
        <el-tab-pane label="回款日历" name="debtCalendar">回款日历</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from 'base/header/header'
  import {getData} from 'api/post'
  export default {
    data() {
      return {
        title: '投资记录',
        activeName: 'investing',
        investing: [],
        returned: [],
        debtCalendar: []
      }
    },
    methods: {
      handleClick(tab, event) {
        this._getData(tab.index)
      },
      _getData(type){
        getData('/account/myInvestRecord', 1, {pageNo: 1, pageSize: 10, type: type}).then(res => {
          if (res.data.success && res.data.code === '0') {
            this.investing = res.data.data.list
          } else if (res.data.code === 'c017') {
            this.$router.push('/login')
          }
        })
      }
    },
    mounted(){
      this._getData('0')
    },
    components: {
      Header
    }
  }
</script>

<style lang="stylus">
  .invest-record
    .invest-record-content
      margin: 60px 0
      .el-tabs__nav-scroll
        display: flex
        justify-content: center
      .time
        font-size: 14px
</style>
