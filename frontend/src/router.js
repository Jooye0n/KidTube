import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Main from './views/Main.vue' //로그인 후 이동하는 메인 페이지
import Theme from './views/Theme.vue'
import Channel from './views/Channel.vue'
import myChannel from './views/myChannel.vue'
import Join from './views/Join.vue'
import Video from './views/Video.vue'
import VideoUpload from './views/VideoUpload.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/post',
      name: 'APP',
      component: App
    },
    {
      path: '/main/:UserName',
      name: 'Main',
      component: Main
    },
    {
      path: '/theme/:id',
      name: 'Theme',
      component: Theme
    },
    {
      path: '/channel/:id',
      name: 'Channel',
      component: Channel
    },
    {
      path: '/myChannel/:UserName',
      name: 'myChannel',
      component: myChannel
    },
    {
      path: '/video/:VideoName',
      name: 'Video',
      component: Video
    },
    {
      path: '/videoUpload/:UserName',
      name: 'videoUpload',
      component: VideoUpload
    },
    {
      path: '/join',
      name: 'Join',
      component: Join
    }
  ]
})
