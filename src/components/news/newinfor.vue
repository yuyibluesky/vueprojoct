<template>
  <div id="temp">
      <div class='title'>
          <h4 v-text='list.title'></h4>
          <p>{{list.add_time |timefilter('YYYY-MM-DD HH:mm:ss')}}</p>
      </div>
      <div id="content " v-html="list.content"></div>
      <talklog :id="id"></talklog>
  </div>
</template>
<script>
//引入子组件
import talklog from '../childcomponent/talklog.vue'
import {Toast} from 'mint-ui'
import areaname from '../../kits/areaname.js'
export default {
    data(){
        return {
            list:{},
            id:this.$route.params.id

        }
    },
    created(){
        this.getinfor()
    },

    methods:{
        getinfor(){
            var url=areaname.commentarea+'/api/getnew/'+this.id
            this.$http.get(url)
            .then(function(res){
                var body=res.body
                if(body.status!=0){
                    Toast(body.message)
                    return
                }
                this.list=body.message[0]
            })
        }
    },
    components:{
      talklog:talklog
    }

}
</script>
<style scoped>
.title h4{
    font-size:30px;
    font-weight:bold;
}

</style>
