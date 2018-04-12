<template>
  <div class="index">
    <carousel :list="list"/>
    <div class="content">
      <el-row class="data">
        <el-col :span="12">
          <h2>1111111</h2>
          <p>累计成交金额（元）</p>
        </el-col>
        <el-col :span="12">
          <h2>22222222</h2>
          <p>为用户赚取收益（元）</p>
        </el-col>
      </el-row>
      <el-row class="safe-show">
        <el-col :span="8">
          <a href="#">
            <img src="./hot.png" width="36">
            <p>热门活动</p>
          </a>
        </el-col>
        <el-col :span="8">
          <a href="#">
            <img src="./safety.png" width="36">
            <p>安全保障</p>
          </a>
        </el-col>
        <el-col :span="8">
          <a href="#">
            <img src="./information.png" width="36">
            <p>信息披露</p>
          </a>
        </el-col>
      </el-row>
      <el-row class="invest-item" @click.capture="bidDetail(hot.id)">
        <el-col :span="24">
          <div class="item-detail">
            <el-row class="item-name">
              <el-col :span="24">
                <div class="name">{{hot.name}}</div>
              </el-col>
            </el-row>
            <el-row class="item-data">
              <el-col :span="24">
                <el-row>
                  <el-col :span="8">
                    <div class="rate">{{hot.aprStr}}%</div>
                  </el-col>
                  <el-col :span="8">
                    <div class="deadline">{{hot.timeLimitStr}}</div>
                  </el-col>
                  <el-col :span="8">
                    <div class="balance">{{hot.accountStr}}</div>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-row class="item-text">
              <el-col :span="24">
                <el-row>
                  <el-col :span="8">
                    <div class="rate-text">期限收益率</div>
                  </el-col>
                  <el-col :span="8">
                    <div class="deadline-text">投资期限</div>
                  </el-col>
                  <el-col :span="8">
                    <div class="balance-text">借款金额</div>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <el-row class="invest-item" @click.capture="bidDetail(hot.id)">
        <el-col :span="24">
          <div class="item-detail">
            <el-row class="item-name">
              <el-col :span="24">
                <div class="name">{{hot.name}}</div>
              </el-col>
            </el-row>
            <el-row class="item-data">
              <el-col :span="24">
                <el-row>
                  <el-col :span="8">
                    <div class="rate">{{hot.aprStr}}%</div>
                  </el-col>
                  <el-col :span="8">
                    <div class="deadline">{{hot.timeLimitStr}}</div>
                  </el-col>
                  <el-col :span="8">
                    <div class="balance">{{hot.accountStr}}</div>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-row class="item-text">
              <el-col :span="24">
                <el-row>
                  <el-col :span="8">
                    <div class="rate-text">期限收益率</div>
                  </el-col>
                  <el-col :span="8">
                    <div class="deadline-text">投资期限</div>
                  </el-col>
                  <el-col :span="8">
                    <div class="balance-text">借款金额</div>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <el-row class="invest-item" @click.capture="bidDetail(hot.id)">
        <el-col :span="24">
          <div class="item-detail">
            <el-row class="item-name">
              <el-col :span="24">
                <div class="name">{{hot.name}}</div>
              </el-col>
            </el-row>
            <el-row class="item-data">
              <el-col :span="24">
                <el-row>
                  <el-col :span="8">
                    <div class="rate">{{hot.aprStr}}%</div>
                  </el-col>
                  <el-col :span="8">
                    <div class="deadline">{{hot.timeLimitStr}}</div>
                  </el-col>
                  <el-col :span="8">
                    <div class="balance">{{hot.accountStr}}</div>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-row class="item-text">
              <el-col :span="24">
                <el-row>
                  <el-col :span="8">
                    <div class="rate-text">期限收益率</div>
                  </el-col>
                  <el-col :span="8">
                    <div class="deadline-text">投资期限</div>
                  </el-col>
                  <el-col :span="8">
                    <div class="balance-text">借款金额</div>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <el-row class="footer">
        <p>©2017 杭州银米互联网金融服务有限公司 版权所有</p>
        <p>杭州市上城区清泰街571号金泰商务大厦502室</p>
        <p>浙ICP备15037778号-1</p>
        <p>客服电话：400-966-0800</p>
      </el-row>
    </div>
    <Footer></Footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import Footer from 'base/footer/footer'
  import Carousel from 'base/carousel/carousel'
  import {getData} from 'api/post'
  export default{
    data(){
      return {
        list: [],
        hot: []
      }
    },
    mounted(){
      getData('/index/banner', '', {}).then(resolve => {
        this.list = resolve.data.success ? resolve.data.data : []
      })
      this._getData()
    },
    methods: {
      _getData(){
        getData('index/indexBorrow', '', {}).then(res => {
          if (res.data.success && res.data.code === '0') {
            this.hot = res.data.data.hotBorrows[0]
          } else if (res.data.code === 'c017' || res.data.code === 'c012') {
            this.$router.push('/login')
          }
        })
      },
      bidDetail(id){
        console.log(1)
        this.$router.push({
          path: '/invest/detail',
          query: {
            id: id
          }
        })
      }
    },
    components: {
      Carousel,
      Footer
    }
  }
</script>

<style lang="stylus">
  .index
    margin-bottom: 60px
    .content
      .data
        background: #fff
        .el-col
          padding: 5px 10px
          text-align: center
          font-size: 12px
          h2
            color: #ff5f0f
            font-size: 16px
            padding: 5px 0
          p
            padding: 5px 0
          &:first-child
            border-right: 1px solid #ccc
      .safe-show
        margin: 10px 0
        padding: 10px 5px
        background: #fff
        a
          display: block
          text-align: center
          img
            display: inline-block
          p
            padding: 5px 0
            font-size: 12px
            color: #000
      .invest-item
        margin: 10px 0
        background: #fff
        padding: 20px 12px
        .item-name, .item-data
          margin-bottom: 8px
      .footer
        padding: 10px 5px
        background: #434a54
        color: #7d8188
        p
          padding: 5px 0
          line-height: 12px
          text-align: center
          font-size: 12px

</style>
