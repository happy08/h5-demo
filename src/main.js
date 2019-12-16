import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/common.less';
import api from './service/api' // 导入api接口
import utils from './utils/index' // 
import './utils/rem'

Vue.prototype.$api = api; // 将api挂载到原型
Vue.prototype.$utils = utils; // 将utils挂载原型

import BaseHeader from "@/components/BaseHeader.vue"
Vue.component('base-header', BaseHeader)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
