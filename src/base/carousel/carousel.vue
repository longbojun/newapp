<template>
  <div class="carousel">
    <el-carousel :interval="2000" arrow="always">
      <el-carousel-item v-for="item in list" :key="item.id">
        <a :href="item.url">
          <img :src="item.picView" alt="" width="100%">
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      list: {
        type: Array,
        default: () => {
        }
      }
    }
  }
</script>

<style lang="stylus">
  .carousel
    .el-carousel__container
      height: 150px
      .el-carousel__item
        h3
          color: #475669;
          font-size: 18px;
          opacity: 0.75;
          line-height: 150px;
          margin: 0;
      .el-carousel__item
        &:nth-child(2n)
          background-color: #99a9bf;
      .el-carousel__item
        &:nth-child(2n+1)
          background-color: #d3dce6;
</style>
