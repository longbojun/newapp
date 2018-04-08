<template>
  <div class="invest-list">
    <!--体验标-->
    <div class="list-item"
         v-for="exp in expList"
         :key="exp.id"
         @click.capture="bidDetail(exp.id)"
    >
      <el-row>
        <el-col :span="20">
          <div class="item-detail">
            <el-row class="item-name">
              <el-col :span="24">
                <div class="name">{{exp.name}}</div>
              </el-col>
            </el-row>
            <el-row class="item-data">
              <el-col :span="24">
                <el-row>
                  <el-col :span="8">
                    <div class="rate">{{exp.aprStr}}%</div>
                  </el-col>
                  <el-col :span="8">
                    <div class="deadline">{{exp.timeLimitStr}}</div>
                  </el-col>
                  <el-col :span="8">
                    <div class="balance">即投即起息</div>
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
                    <div class="balance-text">起息时间</div>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
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
      expList: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      bidDetail(id){
        this.$router.push({
          path: 'expDetail',
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
