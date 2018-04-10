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
          path: 'expDetail',
          name: 'expDetail',
          component: resolve => {
            require(['components/invest/exp-detail/exp-detail'], resolve)// 投资详情
          }
        },
        {
          path: 'borrow',
          name: 'Borrow',
          component: resolve => {
            require(['components/invest/bid-borrow/bid-borrow'], resolve) // 借款资料
          }
        },
        {
          path: 'desc',
          name: 'Description',
          component: resolve => {
            require(['components/invest/bid-desc/bid-desc'], resolve) // 借款描述
          }
        },
        {
          path: 'expDesc',
          name: 'expDesc',
          component: resolve => {
            require(['components/invest/exp-desc/exp-desc'], resolve) // 借款描述
          }
        },
        {
          path: 'record',
          name: 'Record',
          component: resolve => {
            require(['components/invest/bid-record/bid-record'], resolve) // 投资记录
          }
        },
        {
          path: 'expRecord',
          name: 'expRecord',
          component: resolve => {
            require(['components/invest/exp-record/exp-record'], resolve) // 投资记录
          }
        },
        {
          path: 'investment',
          name: 'Investment',
          component: resolve => {
            require(['components/invest/bid-investment/bid-investment'], resolve) // 投资记录
          }
        }
      ]
    },
    {
      path: '/member',
      name: 'Member',
      component: resolve => {
        require(['components/member/index/index'], resolve)// 账户中心
      },
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: 'account',
          name: 'm-account',
          component: resovle => {
            require(['components/member/account-center/account-center'], resovle) // 账户中心
          }
        },
        {
          path: 'record',
          name: 'm-record',
          component: resovle => {
            require(['components/member/invest-record/invest-record'], resovle) // 投资记录
          }
        },
        {
          path: 'assets',
          name: 'm-assets',
          component: resolve => {
            require(['components/member/user-assets/user-assets'], resolve) // 我的资产
          }
        },
        {
          path: 'moneyRecord',
          name: 'm-moneyRecord',
          component: resolve => {
            require(['components/member/money-record/money-record'], resolve) // 资金记录
          }
        },
        {
          path: 'autoInvest',
          name: 'm-autoInvest',
          component: resolve => {
            require(['components/member/auto-invest/auto-invest'], resolve) // 自动投标
          }
        },
        {
          path: 'redEnvelope',
          name: 'm-red-envelope',
          component: resolve => {
            require(['components/member/red-envelope/red-envelope'], resolve) // 我的优惠
          }
        },
        {
          path: 'investItem',
          name: 'm-investItem',
          component: resolve => {
            require(['components/member/invest-item/invest-item'], resolve) // 投资项目
          }
        },
        {
          path: 'settings',
          name: 'm-settings',
          component: resolve => {
            require(['components/member/settings/settings'], resolve) // 账户设置
          }
        },
        {
          path: 'inviteFriends',
          name: 'm-invite-friends',
          component: resolve => {
            require(['components/member/invite-friends/invite-friends'], resolve) // 邀请好友
          }
        },
        {
          path: 'address',
          name: 'm-address',
          component: resolve => {
            require(['components/member/address/address'], resolve) // 地址
          }
        }
      ]
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
