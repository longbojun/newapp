<template>
  <ul class="borrow">
    <li v-for="item in data" :key="item"><img :src="item" alt="" width="100%"></li>
  </ul>
</template>

<script type="text/ecmascript-6">
  import {getData} from 'api/post'
  export default{
    data(){
      return {
        data: []
      }
    },
    mounted(){
      getData('/invest/information', '', {id: this.$route.query.id}).then(res => {
        this.data = res.data.data
      })
    }
  }
</script>

<style lang="stylus">
  .borrow
    img
      display: block
</style>
