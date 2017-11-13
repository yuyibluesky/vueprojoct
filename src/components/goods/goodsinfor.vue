<template>
<div id='temp'>
          <div class='swiper'>
            <goodsswiper :list='list'></goodsswiper> 
          </div>
          <div class='infor'>
            <p>title</p>
            <p class='line'></p>
            <div>
              <span class='price'><span>市场价:<s>￥{{data.market_price}}</s></span><span class='sale'>销售价: <span class='hotsale'>￥{{data.sell_price}}</span>  </span></span>
              <p class='buynum'>购买数量:</p>
              <span class='shop'>
                <mt-button class='nowbuy' size="normal" type="primary">立即购买</mt-button>
                <mt-button size="normal" type="danger">加入购物车</mt-button>
              </span>
            </div>
          </div>
          <div class='params'>
              <p class='goods'>商品参数</p>
              <p class='line'></p>
              <ul class='list'>
                  <li>商品货号:{{data.goods_no}}</li>
                  <li>库存数量:{{data.stock_quantity}}</li>
                  <li>上架时间:{{data.add_time |timefilter()}}</li>
              </ul>
          </div>
          <div class='other'>
             <router-link :to="'/goods/goodsdesc/'+data.id ">
                <mt-button class='pic' size="large" type="primary">图文详情</mt-button>
             </router-link>
             <router-link :to="'/goods/goodstalk/'+data.id ">
                <mt-button size="large" type="danger">商品评论</mt-button>
             </router-link>
          </div>
</div>
</template>

<script>
import {Toast} from 'mint-ui'
import areaname from '../../kits/areaname.js'
import goodsswiper from '../childcomponent/com-swiper.vue'
// import talkgoods from '../childcomponent/talklog.vue'
export default {
  components:{goodsswiper},

  data () {
    return {
        id:this.$route.params.id,
        list:'',
        data:{},

    };
  },
  methods:{
    getswiper(){
          var url=areaname.commentarea+ '/api/getthumimages/'+this.id
          this.$http.get(url)
          .then(function(res){
            this.list=res.body.message

        
          })
    },
    getinfor(){
      var url=areaname.commentarea+'/api/goods/getinfo/'+this.id;
      this.$http.get(url)
      .then(function(res){
        var body=res.body
        this.data=body.message[0]
      })
    }
  },
  created(){
    this.getswiper()
    this.getinfor()
    
  }
}
</script>

<style lang="css" scoped>

#temp{
  padding: 20px;
}
.swiper , .infor,.other,.params {
  margin:10px;
  border:1px solid #ccc;
  border-radius: 5px;
}
.params ul{
  padding-left: 20px;
}
.params ul li{
  list-style: none;
  height: 30px;
  line-height: 30px;
  text-align: left;
}
.params .goods{
  font-size: 20px;
  margin-top:5px;
  height: 20px;
  line-height: 20px;
  margin-left: 5px;
}

.line{
  height: 1px;
  border:1px solid #ccc;
}
.infor .price{
  margin-left: 20px;
}
.infor .sale{
  margin-left: 20px;
}
.infor .price .hotsale{
  font-size: 25px;
  color:red;
}
.infor .buynum{
  margin-left: 20px;
  font-size: 16px;
  margin-top:10px;
}
.infor .shop{
  margin-left: 20px;
}
.infor .shop .nowbuy{
  margin-right:10px;
}
.other .pic{
  margin:10px 0 10px 0;
}

</style>