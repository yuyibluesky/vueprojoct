import Vue from 'vue'

Vue.filter('timefilter',function(input){
var res;
var time=new Date(input);
var year=time.getFullYear();
var month =time.getMonth()+1;
var Day=time.getDate();
var H=time.getHours();
var m=time.getMinutes();
var s=time.getSeconds();
return res=year+'-'+month+'-'+Day
+'-'+H+'-'+m+'-'+s;
})
