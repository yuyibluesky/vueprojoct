<template>
  <div temp>
       
       <ul class="mui-table-view">
				<li v-for='(item,index) in list ' :key="index" class="mui-table-view-cell mui-media">
					<router-link :to="'/news/newinfor/' +item.id" >
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h4>{{item.title}}</h4>
							<p class='mui-ellipsis'>{{item.zhaiyao}}</p>
                            <div class="settime">
                                <span>点击:{{item.click}}次</span>
                                <span>上传时间:{{item.add_time | timefilter('YYYY-MM-DD HH:mm:ss')}}</span>
                            </div>
						</div>
					</router-link>
				</li>
		</ul>
  </div>
</template>
<script>
import areaname from "../../kits/areaname.js"
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            list:[]
        }
    },
    created(){
        this.getlist()
    },
    methods:{
        getlist(){
            var url=areaname.commentarea+'/api/getnewslist';
            this.$http.get(url)
            .then(function(res){
                var body=res.body
                if(body.status!=0){
                    Toast(body.message)
                    return
                }
                this.list=body.message;
            })

        }
    }
  
}
</script>
<style scoped>

h4{
    font-size: 22px;
}
.mui-table-view img{
    width: 60px;
    height: 60px;

}
.settime{
    color:#ddd;
    font-size:14px;
}

</style>
