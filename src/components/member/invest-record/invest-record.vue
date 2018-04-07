<template>
  <div class="invest-record">
    <el-tabs v-model="activeName" type="border-card" tab-position="top" @tab-click="handleClick">
      <el-tab-pane label="投资中" name="first">投资中</el-tab-pane>
      <el-tab-pane label="已回款" name="second">已回款</el-tab-pane>
      <el-tab-pane label="回款日历" name="third">回款日历</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        activeName: 'first'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event)
      }
    }
  }
</script>

<style lang="stylus">
  .el-tabs__nav-scroll
    text-align: center
    .el-tabs__nav
      float: none
</style>
