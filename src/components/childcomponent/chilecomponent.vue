<template>
  <div id='temp'>
      <h4>评论内容</h4>
      <br>
      <textarea placeholder="请输入评论内容"></textarea>
      <br>
      <h4>评论信息</h4>
      <div>
          <ul>
              <li>
                  <div>
                      <span>第1楼</span> 
                      <span>用户名</span>
                      <span>评论时间</span>
                  </div>
                  <div>
                     
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
            data:[],
            content:'',
            pageindex:1           
        }
    },
    props:['value'],
    created(){

    },
    methods:{

        //提交评论；


        getpost(){
            var url=areaname.commentarea+'/api/postcomment/'+this.id;
            this.$http.post(url,{content:this.content},{emulateJSON:true})
            .then(function(res){
                var body=res.body;
                if(this.content.trim()==""){
                    Toast('请输入评论内容')
                }
                this.data=[
                    {
                    user_name: "aiai",
                    add_time: new Date(),
                    content: this.content,
                    }

                ].concat(this.data)
                Toast("评论成功");
                this.content=""

            })
        },
        getlist(pageindex){
            pageindex=pageindex||1
            var url=areaname.commentarea+'/api/getcomments/'+this.id+'?pageindex='+pageindex
            this.$http.get(url)
            .then(function(res){
                var body=res.body
                if(body.status!=0){
                    Toast(body.message)
                    return
                }
                this.data=this.data.concat(body.message)

            })
        },
        getmore(pageindex){
            this.pageindex++
            this.getlist(this.pageindex)
        }

    }
    
  
}
</script>
<style scoped>

</style>
