<template>
  <div id='temp'>
            <!-- 制作滚动条 -->
         
            <div class='list'>
                <ul :style="{width:ulWidth+'px'}" class='piclist'>
                    <li class='all' >全部</li>
                    <li @click='getpiclist(item.id)' v-for='(item,index) in piclist' :key='index'>
                       <a href="">
                           {{item.title}}
                       </a>
                    </li>
                   
                </ul>
            </div>

            <!-- 制作图片内容 -->
            <div class='picinfor'>
                <ul>
                    <li class='picmsg' v-for="(item,index) in picinforlist" :key='index'>
                        <router-link :to="'/photo/picinfor/'+ item.id">
                            <img id='picsize' v-lazy="item.img_url" :src="item.img_url" >
                        </router-link>
                        <div class='msg'>
                            <h3>{{item.title}}</h3>
                            <p>{{item.zhaiyao}}</p>
                        </div>
                    </li>
                </ul>
            </div>
  </div>
</template>
<script>
import areaname from '../../kits/areaname.js'
import {Toast} from 'mint-ui'

export default {
    data(){
        return{
            piclist:'',
            ulWidth:null,
            picinforlist:''
        }
    },
    methods:{
        getlist(){
            var url=areaname.commentarea+'/api/getimgcategory';
            this.$http.get(url)
            .then(function(res){
                var body=res.body
                if(body.status!=0){
                    Toast(body.message);
                    return
                }
                this.piclist=body.message;
                var length=body.message.length+1
                this.ulWidth=length*100
                console.log(this.ulWidth)
                
            })
        },
        getpiclist(id){
            var url=areaname.commentarea+'/api/getimages/'+id
            this.$http.get(url)
            .then(function(res){
                var body=res.body;
                if(body.status!=0){
                    Toast(body.message)
                    return 
                }
                this.picinforlist=body.message;
            })
        }
    },
    created(){
        this.getlist();
        this.getpiclist(0);
    }
  
}
</script>
<style scoped>
 #temp{
    padding-top: 40px;
}
 #picsize{
    width: 100%;
    height: 300px;
} 
.all{
    color:pink;
    height: 40px;
    padding-top: 10px;
  
}
 .list{
     width: 100%;  
     height: 40px;
     overflow-x: auto;
}
.list ul{
    height: 40px;
     margin:0;
    padding-left: 5px;

}

 .list li{
    list-style: none;
    float: left;
    height: 40px;
    width: 80px;
    margin-left:10px;
}
.piclist li a{
    width: 80px;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    display: block;
    color:pink;
}
.picinfor ul{
    padding:10px;
    margin: 0;
}
.picinfor li{
    list-style: none;
}
.picmsg{
    position: relative;
}
.msg{
    position: absolute;
    bottom: 5px;
    color: #8f8f94;

}

</style>
