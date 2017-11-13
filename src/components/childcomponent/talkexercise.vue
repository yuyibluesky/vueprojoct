<template>
<div>
    <h3>评论区</h3>
    <p class='line'></p>
    <textarea v-model='msg'></textarea>
    <h3>评论信息</h3>
    <p class='line'></p>
    <div class='talk'>   
            <div>
                <span>第几楼</span>
                <span>用户名</span>
                <span>发表时间</span>

            </div>
            <ul class="mui-table-view">
			      <li v-text='item.content' class="mui-table-view-cell"></li>
		    </ul>

    </div>
     <mt-button @click="getmore()" type="danger" size="large" plain>加载更多</mt-button>



</div>
</template>

<script>
import areaname from '../../kits/areaname.js'
import {Toast} from 'mint-ui'
export default {
    props:['id'],
  data () {
    return {
        list:'',
        msg:'',
        pageindex:1


    };
  },
  created(){
      this.postlist()
  },
methods:{
      getlist(){
          var url=areaname.commentarea+'/api/getcomments/'+this.id+'?pageindex='+pageindex
          this.$http.get(url)
          .then(function(res){
              var body=res.body;
             if(this.msg.trim()==null){
                 Toast('请输入内容')
                 return
             }
             this.list=[{
                  user_name: "aiai",
                  add_time: new Date(),
                  content: this.msg,
             }].concat(this.list)
          })
          this.msg=""
      },
      getlist(pageindex){
         pageindex=pageindex||1;

          var url=areaname.commentarea+'/api/getcomments/'+this.id+'?pageindex='+pageindex
          this.$http.get(url)
          .then(function(res){
              var body=res.body
              if(body.status!=0){
                  Toast(body.message)
                  return
              }
              this.list=this.list.concat(body.message)
          })

      },
      getmore(){
          this.pageindex++
          this.getlist(this.pageindex)
      },
      created(){
          this.getlist(this.pageindex)
      }


  }
}
</script>

<style lang="css" scoped>

</style>