<template>
  <div id="temp">
      <h3>提交评论</h3>
      <p></p>
      <textarea placeholder="请输入评论内容" v-model="postcontent"></textarea>
        <mt-button :disable="postcomment='' " size="large" @click="postmsg()" type="primary">发表</mt-button>
      <h3>评论列表</h3>
      <p></p>
     
      <div class="talk"  v-for="(item,index) in data" :key="index">
         
              <div class="umsg">
                  <span>第{{index+1}}楼</span>
                  <span >用户名：{{item.user_name}}</span>
                   <span>发表时间：{{item.add_time |timefilter('YYYY-MM-DD')}}</span>
              </div>
             
          <ul class="mui-table-view">
					    <li class="mui-table-view-cell" v-text="item.content"></li>
				  </ul>

      </div>
      <mt-button @click="getmore()" type="danger" size="large" plain>加载更多</mt-button>
      
    <div id='big'></div>

  </div>
</template>
<script>
import areaname from '../../kits/comment.js'
import {Toast} from 'mint-ui'
export default {
    props:['id'],
    data(){
      return {
        papeindex:1,
        postcontent:'',
        data:[
         
        ]
      }
    },
    created(){
      this.getlist(this.papeindex)
    },
    methods:{
      postmsg(){

        var url=areaname.commonarea +"/api/postcomment/"+this.id;

        this.$http.post(url,{content:this.postcontent},{emulateJSON:true})

        .then(function(res){


          var body=res.body;   

            Toast(body.message)
           this.data = [{
                  user_name: "aiai",
                  add_time: new Date(),
                  content: this.postcontent,
                   }].concat(this.data)
            this.postcontent="";
         

        })
      },
      getlist(papeindex){
         papeindex=papeindex||1;

        var url=areaname.commonarea + "/api/getcomments/"+this.id+"?pageindex="+papeindex;

        this.$http.get(url)
          .then(function(res){

           var body=res.body;

            if(body.status!=0){

             Toast(body.message)

            return
          }
          this.data=body.message.concat(this.data);
        })
      },
      getmore(){
        this.papeindex++;
        this.getlist(this.papeindex)
        
      }
    }

}
</script>
<style scoped>
#big{
  height: 500px;
}
#temp{
  padding-top: 40px;
  padding: 5px;
}
.talk{
  margin: 0;
  padding: 0;

}
.talk li{
  list-style: none;
  margin: 0;
  padding: 0;
}
.talk li .umsg{
  font-size:10px;
  color:blue
}
</style>

