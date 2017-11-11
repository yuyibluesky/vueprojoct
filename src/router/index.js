import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue'
import newlist from '@/components/news/newslist.vue'
import newinfor from '@/components/news/newsinfor.vue'
import img from '@/components/img/imglist.vue'
import imginfor from '@/components/img/imginfor.vue'
Vue.use(Router)

export default new Router({
  routes: [
    // {path: '/' , redirect:home},
    { path: '/home', component: home },
    {path:'/news/newslist',component:newlist},
    {path:'/news/newslist/:id',component:newinfor},
    {path:'/img/imglist',component:img},
    {path:'/img/imginfor/:id',component:imginfor}
   
  ]
})
