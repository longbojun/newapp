<template>
  <div class="invest-list">
    <bid-exp :expList="expList"></bid-exp>
    <bid-item :bidList="bidList"></bid-item>
  </div>
</template>

<script type="text/ecmascript-6">
  import BidExp from 'base/list/bid-exp/bid-exp'
  import BidItem from 'base/list/bid-item/bid-item'
  import {getData} from 'api/post'
  export default{
    data(){
      return {
        expList: [],
        bidList: []
      }
    },
    mounted(){
      const data = {
        aprSearch: '',
        nameSearch: '',
        pageNo: 1,
        pageSize: 10,
        statusSearch: '',
        timeSearch: '',
        typeSearch: ''
      }
      getData('/invest/list', '', data).then(res => {
        if (res.data.code === '0' && res.data.success) {
          const list = res.data.data.list
          this.expList = list.slice(0, 1)
          this.bidList = list.slice(1)
        }
      })
    },
    components: {
      BidExp,
      BidItem
    }
  }
</script>

<style lang="stylus">
  .invest-list
    .list-item
      margin-top: 12px
      padding: 16px 10px
      background: #fff
      font-size: 14px
      .item-detail
        .item-name
          margin-bottom: 10px
        .item-data
          margin-bottom: 5px
          .rate
            color: #f50
      .item-progress
        position: relative
        .progress
          position: absolute
          right: 0
          bottom: -65px
          svg
            .el-progress-circle__path
              stroke: #f50
</style>
