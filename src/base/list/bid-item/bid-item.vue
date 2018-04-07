<template>
  <div>
    <div class="list-item"
         v-for="bid in bidList"
         :key="bid.id"
         @click.capture="bidDetail(bid.id)"
    >
      <el-row>
        <el-col :span="20">
          <div class="item-detail">
            <el-row class="item-name">
              <el-col :span="24">
                <div class="name">{{bid.name}}</div>
              </el-col>
            </el-row>
            <el-row class="item-data">
              <el-col :span="24">
                <el-row>
                  <el-col :span="8">
                    <div class="rate">{{bid.aprStr}}%</div>
                  </el-col>
                  <el-col :span="8">
                    <div class="deadline">{{bid.timeLimitStr}}</div>
                  </el-col>
                  <el-col :span="8">
                    <div class="balance">{{bid.accountStr}}</div>
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
        <el-col :span="4" class="item-progress">
          <div class="progress">
            <el-progress type="circle" :percentage="Number(bid.scalesStr)" :width="50"
                         :stroke-width="3"></el-progress>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {}
    },
    props: {
      bidList: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      bidDetail(id){
        this.$router.push({
          path: 'detail',
          query: {
            id: id
          }
        })
      }
    }
//    mounted(){
//      this.isShow = false
//    }
  }
</script>

<style lang="stylus">

</style>
