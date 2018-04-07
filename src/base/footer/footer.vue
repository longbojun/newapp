<template>
  <div id="footer">
    <el-footer>
      <el-row>
        <el-col :span="6">
          <router-link :to="{path:'/index'}">
            <div class="grid-content"><i class="el-icon-menu"></i>首页</div>
          </router-link>
        </el-col>
        <el-col :span="6">
          <router-link :to="{path:'/invest/list'}">
            <div class="grid-content"><i class="el-icon-document"></i>投资</div>
          </router-link>

        </el-col>
        <el-col :span="6">
          <router-link :to="{path:'/activity'}">
            <div class="grid-content"><i class="el-icon-star-off"></i>活动</div>
          </router-link>
        </el-col>
        <el-col :span="6">
          <router-link :to="{path:'/member'}">
            <div class="grid-content"><i class="el-icon-setting"></i>账户</div>
          </router-link>
        </el-col>
      </el-row>
    </el-footer>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="stylus">
  #footer
    .el-footer
      padding: 0
      height: 60px
      position: fixed
      width: 100%
      bottom: 0
      left: 0
      z-index: 100
      background: #fff
      .el-col
        line-height: 60px
        text-align: center
        .grid-content
          text-align: center
        a
          display: inline-block
          width: 100%
          text-align: center
          color: #000
          text-decoration: none
          font-size: 16px
          &.router-link-active
            color: #ff5500
            background: #f4f4f4
</style>
