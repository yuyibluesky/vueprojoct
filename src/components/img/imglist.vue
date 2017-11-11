<template>
  <div id="temp">
        <!-- 顶部滚动条处理 -->
        <div id="list">
            <ul :style="{width:ulwidth+'px'}">
                <li>全部</li>
                <li v-for="(item , index) in list " @click="getimg(item.id)" :key="index">{{item.title}}</li>
               

            </ul>
        </div>
        <!-- 制作图片信息 -->
        <div id="imglist">
            <ul>
                <li v-for="(item,index) in data" :key="index">
                    <router-link :to="'/img/imginfor/'+item.id">
                        <img   v-lazy="item.img_url" :key="item.img_url">
                        <div id="msg">
                            <h4>{{item.title}}</h4>
                            <p>{{item.zhaiyao}}</p>
                        </div>
                    </router-link>
                 </li>

            </ul>
        </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
import areaname from '../../kits/comment.js';
export default {
    data(){
        return {
            id:0,
            list:[],
            data:[],
            ulwidth:null
        }
    },
    created(){
        this.getnav();
        this.getimg(0);
    },
    // {
// "title": "家居生活",
// "id": 14
// },
// {
// "title": "摄影设计",
// "id": 15
// },
// {
    methods:{
        //获取顶部导航信息；
        //http://vue.studyit.ioapi/getnewslist
        ///api/getimgcategory
        getnav(){
            var url=areaname.commonarea+'/api/getimgcategory'
            this.$http.get(url)
            .then(function(res){
                var body=res.body;
                if(body.status!=0){
                    Toast(body.message)
                    return 
                }
                this.list=body.message
                this.ulwidth=(body.message.length+1)*78;
                // console.log(this.ulwidth)

            })
        },
        getimg(id){
            var url=areaname.commonarea+'/api/getimages/'+id
            this.$http.get(url)
            .then(function(res){
                var body=res.body;
                if(body.status!=0){
                    Toast(body.message);
                    return
                }
                this.data=body.message;


            })
            
        }
    }
  
}
</script>
<style scoped>
#temp{
  
 
   margin: 0;   
}
#list{
    width: 100%; 
      /* max-width: 320px;   */
    overflow-x: auto;
    height:50px;
}
#list ul{   
    margin:0;
    padding-left: 10px;
}
#list li{
    list-style: none;
    display: inline-block;
    padding: 5px;
    color:blue;

}
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
#imglist{
    width:100%;
}
#imglist ul{
    margin:0;
    padding: 0;
}
#imglist li{
    list-style: none;
    height: 300px;
    position: relative;
}
#imglist li img{
    display: block;
    width:100%;
    height: 300px;

}
#msg{
    width: 100%;
    position: absolute;
    bottom: 0;
    color:white;
   background-color:rgba(0,0, 0, 0, 0.5);
    
}
#msg h3{
    font-size: 14px;
    font-weight: bold;
     color:white;
}
#msg p{
    font-size: 12px;
     color:white;

}

</style>
