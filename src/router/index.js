import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue'
import newslist from '@/components/news/newslist.vue'
import newsinfor from '@/components/news/newinfor.vue'
import photolist from '@/components/photo/piclist.vue'
import picinfor from '@/components/photo/picinfor.vue'
import goodslist from '@/components/goods/goodslist.vue'
import goodsinfor from '@/components/goods/goodsinfor.vue'
import goodstalk from '@/components/goods/goodstalk.vue'
import goodsdesc from '@/components/goods/goodsdesc.vue'


Vue.use(Router)

export default new Router({
    linkActiveClass : 'mui-active',
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:home},
    {path:'/news/newslist',component:newslist},
    {path:'/news/newinfor/:id',component:newsinfor},
    {path:'/photo/piclist',component:photolist},
    {path:'/photo/picinfor/:text',component:picinfor},
    {path:'/goods/goodslist',component:goodslist},
    {path:'/goods/goodsinfor/:id',component:goodsinfor},
    {path:'/goods/goodsdesc/:id',component:goodsdesc}


  ]
})
