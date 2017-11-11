<template>
  <div id="temp">
    
        <div class="title">
            <h4 v-text="list.title"></h4>
            <p>{{list.add_time |timefilter('YYYY-MM-DD')}}  {{list.click}}次游览</p>
        </div>
        <div id='content' v-html="list.content"></div>

        <comment :id='id'></comment>

  </div>
</template>
<script>
import comment from '../subcom/subcomment'
import {Toast} from 'mint-ui'
export default {
  

  data(){
      return {
          list:{},
          id:this.$route.params.id
      }
  },
  created(){
      
      this.getmsg();
     
  },
  methods:{
      getmsg(){
            var url='http://vue.studyit.io/api/getnew/'+this.id;
           console.log(this.id)
            this.$http.get(url)
            .then(function(res){
                var body=res.body;
                if(body.status != 0){
                    Toast(body.message)
                    return
                }
                this.list=body.message[0]
            })
      }
     
  },
  components:{
     comment:comment
  }

}
</script>
<style scoped>
#temp{
    padding-top: 40px;
}
	.title h4{
		color: #0094ff;
	}
    .title p{
		color:rgba(0,0,0,0.5);
	}

	.title,#content{
		padding: 5px;
	}
    #content img{
        width:100%;

    }
</style>
