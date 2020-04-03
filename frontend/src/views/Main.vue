<template>
  <div id="app">
    로그인 후 메인 페이지
     <h1>사용자명: {{this.$route.params.UserName}}</h1>
     하단 이미지 클릭시 나의채널로 이동
    <img src="../assets/나의채널.png" @click="myPage"/>

    <div id="my">
          <h3>My구독</h3>
          <router-link to="/channel/채널1">채널1</router-link>
          <router-link to="/channel/채널2">채널2</router-link>
          <hr/>
    </div>
</div>
    
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$http = axios


export default {
    name:'Main',
    data () {
         return {
            UserName: '',
            url: '/theme/'+this.$route.params.UserName
        }
    },
    created() {
        this.UserName= this.$route.params.UserName;
    },
     methods : {
        myPage(){
            alert("나의 채널로 이동")
            // 리다이렉트 처리
            this.$router.push({
            path: '/myChannel/'+this.UserName});
        }
      
    },
 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#aside{
  margin-bottom:20px;
  padding:20px;
  float:right;
  width:19%;
  border: 1px solid black;
}
#content{
   margin-bottom:20px;
  padding:20px;
  width:74%;
  height:70%;
  float:left;
}
#login{
  float:right;
  width:180px;
  border:1px solid black;
  padding:20px 10px;
  margin:10px;
  margin-bottom:30px;
  box-sizing:border-box;
}
</style>




