<template>
  <div id="temp">
	
     	<!--1.0 实现新闻资讯列表样式-->
		<ul class="mui-table-view"> 
				<li v-for="(item,index) in list " :key="index" class="mui-table-view-cell mui-media">
					<router-link :to="'./newslist/'+item.id " >
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
								{{item.title}}
								<p class='mui-ellipsis' v-text="item.zhaiyao"></p>
									<div id="settime">
										<span>上传时间:{{item.add_time | timefilter("YYYY-MM-DD HH:mm:ss")}}</span>
										<span class="click">点击次数:{{item.click}}</span>
									</div>
						</div>
					</router-link>
				</li>
			</ul>
<!-- {
  
					  "status": 0,   // 0 :代表的是成功  非0代表的是服务器发生了错误
					  "message": [
						{
						  "id": 13,
						  "title": "1季度多家房企利润跌幅超50% 去库存促销战打响",
						  "add_time": "2015-04-16T03:50:28.000Z",
						  "zhaiyao": "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
						  "click": 1,
						  "img_url": "http://www.webhm.top:8080/upload/201504/16/201504161149414479.jpg"
						},
						{
						  "id": 14,
						  "title": "买房还是炒股，2015年买房无法拒绝的5大理由",
						  "add_time": "2015-04-16T04:05:34.000Z",
						  "zhaiyao": "转眼间2015年已经过去了4个月，在这短短的四个月",
						  "click": 2,
						  "img_url": "http://www.webhm.top:8080/upload/201504/16/201504161205596364.jpg"
						}
						] -->

  </div>
</template>
<script>
import areaname from '../../kits/comment.js'
import {Toast} from 'mint-ui'
export default {
  data(){
    return{
      list:[],
    }
  },
  created(){
      this.getmsg();
  },
  methods:{
      getmsg:function(){
        var url= areaname.commonarea+'/api/getnewslist';
        this.$http.get(url)

        .then(function(res){

          var body=res.body;

          if(body.status !=0){

            Toast(body.message);
            return
          };
          this.list=body.message;

        })
      }
  }
  
}
</script>
<style scoped>

.mui-table-view img{
 	height:80px;
 	width:80px;
 }

 .mui-table-view .mui-media-object{
	 max-width: 80px;
	 line-height: 80px;
 }
#settime{
	font-size: 12px;
	color:#0094ff;
	margin-top:1.5em;
	padding-left: 10px;
}
/* .mui-table-view .mui-media, .mui-table-view .mui-media-body{
	overflow: 
} */

</style>
