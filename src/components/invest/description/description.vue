<template>
  <div class="description">
    <p v-html="data"></p>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getData} from 'api/post'
  import {removeStyle} from 'common/js/common'
  export default{
    data(){
      return {
        data: ''
      }
    },
    mounted(){
      getData('/invest/describe', '', {id: this.$route.query.id}).then(res => {
        this.data = removeStyle(res.data.data)
      })
    }
  }
</script>

<style lang="stylus">
  .description
    padding: 10px
    p
      line-height: 30px
      text-align: justify
</style>
