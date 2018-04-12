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
      getData('/invest/describe', '', {id: this.$route.query.id}).then(res => {
        if (res.data.success && res.data.code === '0') {
          this.data = removeStyle(res.data.data)
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
  .description
    margin-top: 60px
    padding: 10px
    p
      line-height: 30px
      text-align: justify
</style>
