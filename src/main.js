import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'common/stylus/index.styl'
import {getCookie} from 'api/post'

Vue.config.productionTip = false
FastClick.attach(document.body)
Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  // console.log(to)
  if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
    if (getCookie('token')) { // 判断当前的token是否存在
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
