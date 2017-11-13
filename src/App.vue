<template>
  <div id="app">
    <mt-header fixed title="柠檬有点甜"></mt-header>

    <router-view id="mainbox"></router-view>


    <nav class="mui-bar mui-bar-tab">
			<router-link to='/home' class="mui-tab-item ">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to='/member/member' class="mui-tab-item" >
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link to='/shopcars/shopcar' class="mui-tab-item" >
				<span class="mui-icon mui-icon-contact"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link to='/searchs/search' class="mui-tab-item">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* margin-top: 60px; */
}
#mainbox{
  padding-top:60px;
  padding-bottom:50px;
}
.mint-header{
  background-color:pink;
  height: 60px;
}
nav{
background-color: pink;
}
.mui-icon .mui-badge {
  background-color: purple;
}
.mui-bar{
  background-color: #fff;
}
</style>
