<template>
<div id='temp'>
      <mt-swipe class='setheight'  :auto="4000">
            <mt-swipe-item v-for="(item,index) in list" :key="index">
           
                 <img v-if='item.img!=null' :src="item.img" >
                    <img v-if='item.src!=null' :src="item.src" >
           
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
     
      }
  
}
</script>

<style lang="css" scoped>

.mint-swipe, .mint-swipe-items-wrap{
    width:100%;
    height: 300px;
}
.mint-swipe-items-wrap>div{
    width: 100%;
    height: 40px;

}
.mint-swipe-items-wrap>div img{
    width:100%;
    height: 300px;
    background-repeat: round;
}

</style>