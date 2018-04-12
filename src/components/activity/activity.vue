<template>
  <div class="activity">
    <Header :title="title"></Header>
    <div class="activity-content">
      <el-row
        v-for="(item,index) in list"
        :key="index"
        class="activity-item"
        @click.native="handleClick(item.url)"
      >
        <el-col :span="24">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="item.pic" width="100%">
            <div style="padding: 14px;">
              <span>{{item.title}}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <Footer></Footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from 'base/header/header'
  import Footer from 'base/footer/footer'
  import {getData} from 'api/post'
  export default {
    data(){
      return {
        title: '活动中心',
        list: []
      }
    },
    mounted(){
      this._getData()
    },
    methods: {
      _getData(){
        getData('/siteActivity/findActivitys').then(res => {
          if (res.data.success && res.data.code === '0') {
            this.list = res.data.data
          } else if (res.data.code === 'c017' || res.data.code === 'c012') {
            this.$router.push('/login')
          }
        })
      },
      handleClick(url){
        location.href = url
      }
    },
    components: {
      Header,
      Footer
    }
  }

</script>

<style lang="stylus">
  .activity
    margin: 60px 0
    .activity-content
      padding: 20px 10px
      .activity-item
        margin-bottom: 10px
</style>
