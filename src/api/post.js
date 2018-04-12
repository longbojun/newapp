import axios from 'axios'
import Cookies from 'js-cookie'
import {Loading} from 'element-ui'
const md5 = require('js-md5')
// 定义loading
let loading
function startLoading() {
  loading = Loading.service({
    lock: true,
    text: '加载中……',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}

function endLoading() {
  loading.close()
}

// 定义post函数，config为配置
export function post(config) {
  // 返回promise对象
  return new Promise((resolve, reject) => {
    // 创建axios实例，把基本的配置放进去
    const instance = axios.create({
      // 定义请求根目录
      baseURL: 'http://lltest.yinmimoney.com/api/3.0',
      method: 'post',
      headers: {
        'platform': 'wechat',
        'version': '3.0',
        'Content-Type': 'application/json',
        'deviceId': md5('Yinmi' + new Date().getTime())
      },
      timeout: 3000
    })
    // 请求拦截（配置发送请求的信息）
    instance.interceptors.request.use(function (config) {
      // 处理请求之前的配置
      startLoading()
      return config
    }, function (error) {
      // 请求失败的处理
      return Promise.reject(error)
    })

    // 响应拦截（配置请求回来的信息）
    instance.interceptors.response.use(function (response) {
      // 处理响应数据
      endLoading()
      return response
    }, function (error) {
      // 处理响应失败
      return Promise.reject(error)
    })

    // 请求成功后执行的函数
    instance(config).then(res => {
      // console.log(res)
      resolve(res)
      // 失败后执行的函数
    }).catch(err => {
      console.log(err)
      reject(err)
    })
  })
}
// 区分需要token和data的
export function getData(url, token = '', data = '') {
  if (!token) {
    token = ''
  } else {
    token = getCookie('token')
  }
  return post({
    url: url,
    data: data,
    headers: {
      token: token
    }
  })
}

// 一次存储多个cookie
export function setCookie(obj) {
  for (let key in obj) {
    if (getCookie(key)) {
      clearCookie(key)
    }
    Cookies.set(key, obj[key])
  }
}
// 获取一个cookie
export function getCookie(key) {
  return Cookies.get(key)
}

// 清除cooki
export function clearCookie(key) {
  Cookies.remove(key)
}
