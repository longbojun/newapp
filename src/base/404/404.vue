<template>
  <div></div>
</template>

<script type="text/ecmascript-6">
  import {Loading} from 'element-ui'
  export default{
    data(){
      return {}
    },
    mounted(){
      Loading.service({
        fullscreen: true,
        lock: true,
        text: '该页面并不想理你，抛个404自己领悟',
        background: 'rgba(0, 0, 0, 0.7)'
      })
    }
  }
</script>

<style lang="stylus">

</style>
