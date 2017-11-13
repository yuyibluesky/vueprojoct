// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VuePreview from 'vue-preview'
Vue.use(VuePreview)


import mintui from 'mint-ui'

import 'mint-ui/lib/style.min.css'
Vue.use(mintui)
import '../static/mui-master/dist/css/mui.css'

import vueResource from 'vue-resource'
Vue.use(vueResource)


//倒入全局基本样式
import '../static/site.css'

//全局时间过滤器
import moment from 'moment'


import timefilter from './filter/timefilter.js'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
