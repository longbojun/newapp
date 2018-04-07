<template>
  <div>
    <carousel :list="list"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import Carousel from 'base/carousel/carousel'
  import {getData} from 'api/post'
  export default{
    data(){
      return {
        list: []
      }
    },
    mounted(){
      getData('/index/banner', '', {}).then(resolve => {
        this.list = resolve.data.success ? resolve.data.data : []
      })
    },
    components: {
      Carousel
    }
  }
</script>

<style lang="stylus">

</style>
