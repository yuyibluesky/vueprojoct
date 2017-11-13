<template>
  <div id='temp'>
      <div class='main'>
          <!-- {{infor}} -->
          <h4>{{infor.title}}</h4>
          <p>{{infor.add_time | timefilter()}}  游览量:{{infor.click}}</p>
          <p class='line'></p>
            <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li v-for='(item,index) in list ' :key="index" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                       <img style="height:100px" class="preview-img"
                         :src="item.src"
                         @click="$preview.open(index, list)">
                    </li>
		           
		        </ul> 
		    </div> 
          
            <p v-html="infor.content"></p>
      </div>
      <div>
          <talklog :id="id"></talklog>
      </div>
            
  </div>
</template>
<script>
import areaname from '../../kits/areaname.js'
import {Toast} from 'mint-ui'
import talklog from '../childcomponent/talklog'
export default {
    components:{
        talklog
    },
    data(){
        return {
            id:this.$route.params.text,
            list:[],
            infor:[]
        }
    },
    created(){
        this.getinfor()
        this.getimg()

    },
    methods:{
        getinfor(){
            var url=areaname.commentarea+'/api/getimageInfo/'+this.id;
            this.$http.get(url)
            .then(function(res){
                var body=res.body
                if(body.status!=0){
                    Toast(body.message)
                    return
                }
                this.infor=body.message[0]
            })
        },
        getimg(){
            var url=areaname.commentarea+'/api/getthumimages/'+this.id
            this.$http.get(url)
            .then(function(res){
                var body=res.body
                body.message.forEach(function(el){
                    var img=new Image();
                    img.src=el.src;
                    img.onload=function(){
                         el.w=img.width;
                        el.h=img.height;
                    }
                   
              

                })
                  this.list=body.message
            })
           
        }

    }
   
  
}
</script>
<style scoped>
.mui-grid-view.mui-grid-9{
    background-color: #fff;

}
</style>
