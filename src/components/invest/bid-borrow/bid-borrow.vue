<template>
  <div>
    <Header :title="title"></Header>
    <div class="borrow">
      <ul>
        <li v-for="item in data" :key="item"><img :src="item" alt="" width="100%"></li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from 'base/header/header'
  import {getData} from 'api/post'
  export default{
    data(){
      return {
        title: '借款资料',
        data: []
      }
    },
    mounted(){
      getData('/invest/information', '', {id: this.$route.query.id}).then(res => {
        if (res.data.success && res.data.code === '0') {
          this.data = res.data.data
        } else if (res.data.code === 'c030') {
          this.$router.push('/invest/list')// 标的不存在
        } else if (res.data.code === 'c031') {
          this.$router.push('/invest/list') // 参数缺失
        }
      })
    },
    components: {
      Header
    }
  }
</script>

<style lang="stylus">
  .borrow
    margin: 60px 0
    img
      display: block
</style>
