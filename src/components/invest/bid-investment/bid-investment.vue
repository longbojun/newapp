<template>
  <div class="investment">
    <div>
      <Header :title="title"></Header>
    </div>
    <div class="investment-content">
      <el-row class="info-show">
        <el-col :span="12">
          <div class="title">可用金额（元）：</div>
          <div class="text">10</div>
        </el-col>
        <el-col :span="12">
          <div class="title">可投金额（元）：</div>
          <div class="text t-color">20</div>
        </el-col>
      </el-row>
      <div>
        <el-form ref="form">
          <el-form-item>
            <el-input placeholder="请输入投资金额"></el-input>
            <p>预期收益：<span></span></p>
          </el-form-item>
          <el-form-item>
            <el-select placeholder="活动区域">
              <el-option label="不可使用红包" value="shanghai"></el-option>
              <el-option label="1元" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select placeholder="活动区域">
              <el-option label="不可使用加息券" value="shanghai"></el-option>
              <el-option label="2%" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <el-button type="primary">下一步</el-button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from 'base/header/header'
  export default {
    data(){
      return {
        title: '标题'
      }
    },
    components: {
      Header
    }
  }
</script>

<style lang="stylus">
  .investment
    .investment-content
      margin: 72px 0
      padding: 20px 30px
      .info-show
        margin-bottom: 22px
        .title
          margin-bottom: 10px
        .text
          font-size: 38px
        .t-color
          color: $color-theme
</style>
