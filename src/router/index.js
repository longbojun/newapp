import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'index'
    },
    {
      path: '/index',
      name: 'Index',
      component: resolve => {
        require(['components/index/index'], resolve)// 首页
      }
    },
    {
      path: '/invest',
      name: 'Invest',
      component: resolve => {
        require(['components/invest/index/index'], resolve)// 投资列表
      },
      children: [
        {
          path: 'list',
          name: 'BidLists',
          component: resolve => {
            require(['components/invest/bid-list/bid-list'], resolve)// 投资列表
          }
        },
        {
          path: 'detail',
          name: 'BidDetail',
          component: resolve => {
            require(['components/invest/bid-detail/bid-detail'], resolve)// 投资详情
          }
        },
        {
          path: 'borrow',
          name: 'Borrow',
          component: resolve => {
            require(['components/invest/borrow/borrow'], resolve) // 借款资料
          }
        },
        {
          path: 'description',
          name: 'Description',
          component: resolve => {
            require(['components/invest/description/description'], resolve) // 借款描述
          }
        },
        {
          path: 'record',
          name: 'Record',
          component: resolve => {
            require(['components/invest/record/record'], resolve) // 投资记录
          }
        }
      ]
    },
    {
      path: '/member',
      name: 'Member',
      component: resolve => {
        require(['components/member/member'], resolve)// 个人账号
      },
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/activity',
      name: 'Activity',
      component: resolve => {
        require(['components/activity/activity'], resolve)// 活动
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => {
        require(['components/login/login'], resolve) // 登录
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: resolve => {
        require(['components/register/register'], resolve) // 注册
      }
    }
  ],
  // 跳转的页面自动滚动到头部
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})
