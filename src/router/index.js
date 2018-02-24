import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/home/index'
import Result from 'views/result/index'
import Fillin from 'views/fillin/index'

import Text from 'components/fillin/text'
import Wifi from 'components/fillin/wifi'
import Website from 'components/fillin/website'
import Vcard from 'components/fillin/vcard'
import Message from 'components/fillin/message'

Vue.use(Router);

var route = new Router({
  // 使用history 去除 #
  // mode: 'history',
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: '二维码'
      }
    },
    { 
      path: '/fillin/', 
      component: Fillin,
      children: [
        { // 文本
          path: 'text',
          component: Text,
          meta: {
            title: '文本二维码'
          }
        },
        { // 网址
          path: 'website',
          component: Website,
          meta: {
            title: '网址二维码'
          }
        },
        { // wifi密码
          path: 'wifi',
          component: Wifi,
          meta: {
            title: 'WiFi二维码'
          }
        },
        { // 电子名片
          path: 'vcard',
          component: Vcard,
          meta: {
            title: '名片二维码'
          }
        },
        { // 短信
          path: 'message',
          component: Message,
          meta: {
            title: '短信二维码'
          }
        }
      ]
    },
    {
      path: '/result/:id',
      name: 'Result',
      component: Result,
      meta: {
        title: '文本二维码'
      }
    },
  ]
})

route.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next()
})

export default route;
