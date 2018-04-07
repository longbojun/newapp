<template>
  <el-header>
    <i class="el-icon-arrow-left" @click="handleBack"></i>
  </el-header>
</template>

<script type="text/ecmascript-6">
  export default{
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
</style>
