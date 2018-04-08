<template>
  <el-header>
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="2">
        <i class="el-icon-arrow-left" @click="handleBack"></i>
      </el-col>
      <el-col :span="22">
        <div class="title">{{title}}</div>
      </el-col>
    </el-row>
  </el-header>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    methods: {
      handleBack(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="stylus">
  .el-header
    position: fixed
    top: 0
    left: 0
    z-index: 100
    width: 100%
    line-height: 60px
    background: #fff
    .el-icon-arrow-left
      font-size: 20px
    .title
      text-align: center
</style>
