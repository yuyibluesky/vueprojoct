<template>
<div id='temp'>  

        <div class="mui-content" style="background-color:#fff">
		   
		    <ul class="mui-table-view mui-grid-view">
		        <li  v-for="(item,index) in data" :key="index"  class="mui-table-view-cell mui-media mui-col-xs-6">
		            <router-link :to="'/goods/goodsinfor/'+item.id">
		                <img class="mui-media-object" :src="item.img_url">
		                <div class="mui-media-body">{{item.title}}</div>
                        
		            </router-link>
                    <div class="maininfo">
                        <p><span class='hotsale'>￥{{item.sell_price}}</span><s>￥{{item.market_price}}</s></p>
                            <!-- <p><span class='hotsale'>￥{{item.sell_price}}</span><s>￥{{item.market_price}}</s></p> -->
                            <!-- <div><span>热卖中</span><span>剩{{item.stock_quantity}}件</span></div> -->
                            <div class='btm'><span class='saling'>热卖中</span><span class='saleout'>剩{{item.stock_quantity}}件</span></div>
                     </div>
                </li>		      
		    </ul>    
		</div>
</div>
</template>

<script>
import {Toast} from 'mint-ui'
import areaname from '../../kits/areaname.js'
export default {
  data () {
    return {
        data:[]
    }

  },
  created(){
        this.getlist()
  },
  methods:{
     getlist(){
             var url=areaname.commentarea+'/api/getgoods?pageindex=1'
             this.$http.get(url)
             .then(function(res){
                 var body=res.body;
                 if(body.status!=0){
                     Toast(body.message)
                     return
                 };
                 this.data=body.message
             })

     }

  }

}
</script>

<style lang="css" scoped>
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
    font-size: 20px;
    line-height: 15px;
    display: block;
    width: 100%;
    height: 15px;
    margin-top: 5px;
    text-overflow: ellipsis;
    color: #333;
}
.mui-table-view.mui-grid-view .mui-table-view-cell > a:not(.mui-btn) {
    margin: 0px 0 0 6px;
}
.mui-table-view.mui-grid-view .mui-table-view-cell{
    padding: 0;
}
.mui-media{
    border:1px solid #ccc;
    
}
.maininfo{
    width: 100%;
    height: 100px;
    background-color: rgba(0,0,0,0.04);
    margin-top: 10px;
}
.maininfo p{
   
    font-size: 16px;
    text-align: left;
    padding-left: 20px;
    padding-top:20px;

}
.maininfo p .hotsale{
    color: red;
    font-size: 20px;
    margin-right: 20px;
}
.maininfo .btm{
    margin-top:20px;
    font: 16px;
    text-align: left;
    padding-left: 20px;
}
.maininfo .saleout{
    float: right;
    margin-right: 20px;
}
</style>