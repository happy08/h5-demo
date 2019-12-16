import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue'),
    meta: {
      index: 0,
    }
  },
  {
    path: '/home',
    redirect:{name: 'home'},
    component: () => import('@/views/Home.vue'),
    meta: {
      index: 0,
      keepAlive: false
    }
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/User.vue'),
    meta: {
      index: 1,
      keepAlive: true
    }
  },
  {
    path: '/validate',
    name: 'validate',
    component: () => import('@/views/Validate.vue'),
    meta: {
      index: 1,
      keepAlive: false
    }
  },

]


const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  //切换路由，取消上个页面所有请求
  window.__axiosPromiseArr.forEach((ele, index) => {
    ele.cancel()
    window.__axiosPromiseArr.shift()
  })
  next()
})


export default router
