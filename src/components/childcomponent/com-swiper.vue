<template>
<div>
      <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in list" :key="index">
            <a :href="item.url">
                 <img v-if='item.img!=null' :src="item.img" >
                 <img v-if='item.src!=null' :src="item.src" >
            </a>
            </mt-swipe-item>
       
        </mt-swipe>
</div>
</template>

<script>
export default {
    props:['list'],
  data () {
    return {
        data:this.$route.params.id
        

    };
  },
  created(){

  },
  methods:{
      getimg(){
          var url=''
          this.$http.get(url)
          .then(function(res){
              this.list=res.body.message
          })
      }
  }
}
</script>

<style lang="css" scoped>
.mint-swipe, .mint-swipe-items-wrap{
    width:100%;
    height: 400px;
}
.mint-swipe-items-wrap>div{
    width: 100%;
    height: 40px;

}
.mint-swipe-items-wrap>div img{
    width:100%;
    height: 400px;
    background-repeat: round;
}
</style>