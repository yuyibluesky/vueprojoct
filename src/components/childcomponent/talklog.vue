<template>
<div id="temp">
          <h3>提交评论</h3>
          <p></p>
          <textarea v-model="content" placeholder="请输入评论内容"  ></textarea>
          <mt-button  size="large" @click.enter="postmsg()" type="primary">发表</mt-button>
          <h3>评论列表</h3>
          <p></p>
          <div v-for='(item,index) in data' :key='index' class='talk'>
                <div>
                  <span>第{{index +1}}楼</span>
                  <span>用户名：{{item.user_name}}</span>
                  <span>发表时间:{{item.add_time | timefilter()}}</span>
                </div>
                <ul class="mui-table-view">
					          <li v-text='item.content' class="mui-table-view-cell"></li>
				        </ul>
          </div>
          <mt-button @click="getmore()" type="danger" size="large" plain>加载更多</mt-button>
          <!-- <div id='big'></div> -->

</div>
</template>
 <script>
import areaname from '../../kits/areaname.js'
import {Toast} from 'mint-ui'
export default {
   props:['id'],
  data(){
    return{
      content:'',
      data:[],
      pageindex:1,

    }
  },
  methods:{
    postmsg(){
         var url=areaname.commentarea+'/api/postcomment/'+this.id;
         this.$http.post(url,{content:this.content},{emulateJSON:true})
         .then(function(res){
           var body=res.body
           if(this.content.trim()==''){
             Toast('请输入评论内容')
             return;
           }
           this.data=[
             {
                  user_name: "aiai",
                  add_time: new Date(),
                  content: this.content,
                   }
           ].concat(this.data)
           Toast('提交评论成功')
            this.content="";
         })

    },
getlist(pageindex){
  pageindex=pageindex||1;
  var url=areaname.commentarea+'/api/getcomments/'+this.id+'?pageindex='+pageindex
  this.$http.get(url)
  .then(function(res){
    var body=res.body;
    if(body.status!=0){
      Toast(body.message)
    }
    this.data=this.data.concat(body.message)
  })



 
},
getmore(pageindex){
  this.pageindex++;
  this.getlist(this.pageindex)
 
}

  },
  created(){
    this.getlist(this.pageindex)
  }
 
}
</script>
<style scoped>
#temp{
  padding:5px;
}
h4{
font-size:20px;
line-height: 20;
}
p{
  border:1px solid #ccc;
}
#big{
  height: 1000px;
}
</style>

