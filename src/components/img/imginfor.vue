<template>
  <div id="temp">
      <div class="top" >
          <span class="back"><返回</span>
         <span class='picmsg'>图片详情</span>
          
      </div>
      <div v-for="(item,index) in data" :key="index">
          <h3>{{item.tiitle}}</h3>
      </div>


  </div>
</template>
<script>
import {Toast} from 'mint-ui'
import areaname from '../../kits/comment.js'
export default {
    data(){
        return{
            id:0,
            list:[],
            data:[]
        }      
    },
     created(){
        //  this.id=this.$route.params.id,
        //  this.getphoto(),
        //  this.getmsg()
        },
    methods:{

        getphoto(){
            var url=areaname.commonarea+'/api/getimageInfo/'+ this.id
            this.$http.get(url)
            .then(function(res){
                var body=res.body;
                console.log(body)
                if(body.status!=0){
                    Toast(body.message)
                    return
                }
                this.list=body.message;
            })

        },
        getmsg(){
            var url=areaname.commonarea+"/api/getimageInfo/"+this.id
            this.$http.get(url)
            .then(function(res){
                var body=res.body;
                if(body.staus!=0){
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

.top{
    padding: 5px;
    color:blue;
    background-color:#eee;
    font-size: 16px;
    font-weight: bold;
}

.top .back{
    display: block;
    margin-left: 10px;
    float: left;
}
.top .picmsg{
   padding-left: 20%;
    /* display: block; */
    float: left;

}
</style>

