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
        this.data = res.data.data
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
