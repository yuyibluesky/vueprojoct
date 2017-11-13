<template>
<div id='temp'>
  
        <div class='main'>
            <h3 class='title'>{{data.title}}</h3>
            <p class='line'></p>
            <div v-html="data.content"></div>
        </div>
        
</div>
</template>

<script>
import {Toast} from 'mint-ui'
import areaname from '../../kits/areaname.js'
export default {
  data () {
    return {
        data:{},
        id:this.$route.params.id

    };
  },
  created(){
this.getinfor()
  },
  methods:{
      getinfor(){
          var url=areaname.commentarea+"/api/goods/getdesc/"+this.id;
          this.$http.get(url)
          .then(function(res){
              var body=res.body
              if(body.status!=0){
                  Toast(body.message)
                  return
              }
              this.data=body.message[0]
          })
      }
  }
}
</script>

<style lang="css" scoped>
.line{
    width: 100%;
    height: 1px;
    border:1px solid #ccc;
}
</style>