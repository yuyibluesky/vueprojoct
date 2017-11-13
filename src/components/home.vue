<template>
  <div temp>
      
        <!-- //轮播图实现 -->
        <!-- <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in data" :key="index">
            <a :href="item.url">
                 <img :src="item.img" >
            </a>
            </mt-swipe-item>
       
        </mt-swipe> -->
        <homeSwiper :list='data'></homeSwiper>
        <router-view></router-view>

        <!-- 九宫格实现mui -->
             <!--
              引入mui的九宫格 -->
              <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                             <router-link to="/news/newslist">
		                         <span class="mui-icon mui-icon-home"></span>
		                            <div class="mui-media-body">新闻资讯</div>
                            </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/photo/piclist" >
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">图片分享</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to='/goods/goodslist'>
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul>
		</div>
  </div>
</template>
<script>
import areaname from '../kits/areaname.js'
import {Toast} from 'mint-ui'
import homeSwiper from './childcomponent/com-swiper.vue'
export default {
    components:{homeSwiper},
    data(){
        return {
            data:[],
        }
    },
    created(){
        this.getimg()
    },
    methods:{
        getimg(){
            var url = areaname.commentarea+"/api/getlunbo";
            this.$http.get(url)
            .then(function(res){
                var body =res.body
                if(body.status !=0){
                    Toast(body.message)
                    return
                }
                this.data=body.message

            })
        }
    }
}
</script>
<style scoped>
.mint-swipe, .mint-swipe-items-wrap{
    width:100%;
    height: 400px;
}
.mint-swipe-items-wrap>div{
    width: 100%;
    height: 40px;

}
.mint-swipe-items-wrap>div img{
    width:100%;
    height: 400px;
    background-repeat: round;
}
.mui-icon-home:before{
   
    background-image: url(../../static/imgs/1.png);
}
.mui-icon-email:before{
     background-image: url(../../static/imgs/2.png);
}
.mui-icon-chatbubble:before{
 background-image: url(../../static/imgs/3.png);
}
.mui-icon-location:before{
 background-image: url(../../static/imgs/4.png);
}
.mui-icon-search:before{
 background-image: url(../../static/imgs/5.png);
}
.mui-icon-phone:before{
 background-image: url(../../static/imgs/6.png);
}
.mui-icon-home:before,
.mui-icon-email:before,
.mui-icon-chatbubble:before,
.mui-icon-location:before,
.mui-icon-search:before,
.mui-icon-phone:before{
     content:'';
    display: block;
    width: 50px;
    height: 50px;
    background-repeat: round;
}
	
</style>
