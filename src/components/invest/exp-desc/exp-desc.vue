<template>
  <div>
    <Header :title="title"></Header>
    <div class="description">
      <p v-html="data"></p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from 'base/header/header'
  import {getData} from 'api/post'
  import {removeStyle} from 'common/js/common'
  export default{
    data(){
      return {
        title: '借款描述',
        data: ''
      }
    },
    mounted(){
      getData('/investExp/expDescribe', '', {id: this.$route.query.id}).then(res => {
        this.data = removeStyle(res.data.data)
      })
    },
    components: {
      Header
    }
  }
</script>

<style lang="stylus">
  .description
    margin-top: 60px
    padding: 10px
    p
      line-height: 30px
      text-align: justify
</style>
