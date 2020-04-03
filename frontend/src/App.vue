<template>
  <div id="app">
    <div id="head">
      <router-link to="/"><img src="./assets/logo.png"> </router-link>
      <button v-on:click="lgnButton">LOGIN</button>
    </div>
    
    <div id="theme">
        <hr/>
          <router-link to="/theme/학습"><img src="./assets/study.png">학습</router-link>
          <router-link to="/theme/동요"><img src="./assets/music.png">동요</router-link>
          <router-link to="/theme/독서"><img src="./assets/books.png">책</router-link>
          <router-link to="/theme/뷰티"><img src="./assets/beauty.png">뷰티</router-link>
          <router-link to="/theme/캐릭터"><img src="./assets/character.png">캐릭터 </router-link> 
        <hr/>
    </div>

    <div id="login" style="visibility:hidden">
      아이디 <input id="login-form input" type="text" v-model="user.name">
      비밀번호 <input id="login-form label" type="password" v-model="user.pw">
      <input type="submit" margin:10 style="display:inline" value="로그인" @click="login">
      <input type="button" style="display:inline" onclick="location.href='/join'" value="회원가입">
    </div>
    
    <div id="content">
        <router-view/>
    </div>
    
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$http = axios


export default {
  data(){
    return{
      posts:[],
      User: null,
      user : {
        name: '',
        pw : '',
      }
    }
  },
  methods : {
    lgnButton: function (event) {
      console.log("로그인");
      document.getElementById("login").setAttribute('style','visibility:visible');
    },
    async login(){
      const result = await axios.post("http://localhost:8000/login/checkUser", {
        name : this.user.name ,
        pw : this.user.pw
      }) 
      .then((response) => this.redirect(this.User = response.data))
    },
     redirect() {
      if(this.User.result == -1){
        alert("로그인 실패")
        // 리다이렉트 처리
        this.$router.push({
        path: '/'});

      }else{
        //로그인 후 로그인 페이지로 이동
        alert("로그인 성공")
        const {search} = window.location
        const tokens = search.replace(/^\?/, '').split('&')
        const {returnPath} = tokens.reduce((qs, tkn) => {
        const pair = tkn.split('=')
        qs[pair[0]] = decodeURIComponent(pair[1])
        return qs
      }, {})

      // 리다이렉트 처리
      this.$router.push({
        path: '/main/'+this.User.name});
    }
     }
  

  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=PT+Sans:400,700);
input[type="submit"] {
    display: block;
    width: 100%;
    margin: 10px 0;
    background: #41D873;
    color: white;
    border: 0;
    padding: 10px;
    font-size: 1.2rem;
  }
  input[type="button"] {
    display: block;
    width: 100%;
    margin: 10px 0;
    background: #41D873;
    color: white;
    border: 0;
    padding: 10px;
    font-size: 1.2rem;
  }
.theme{
display:inline
}
#app {
  background-color: beige;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#content{
   margin-bottom:20px;
  padding:20px;
  width:74%;
  height:70%;
  float:left;
}
#login{
  width:200px;
  margin:100px auto;
  border: 7px solid rgb(102, 214, 111);
  border-radius: 5px;
  padding: 15px;
}
/* inline이였던 요소들을 block으로 바꿈 */

#login-form input, #login-form label{
display:block;
}
</style>
