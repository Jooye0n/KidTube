<template>
  <div>
    <h1>회원 가입</h1>
    <br/>닉네임 <input v-model="user.name" placeholder="name" type="text" id="Name" value="닉네임을 입력하세요" required>
    <br/>아이디 <input v-model="user.id" placeholder="ID" type="text" id="Id" required>
    <br />비밀번호 <input v-model="user.password" placeholder="password" type="password" id="Pw" required>
    <br />비밀번호 확인 <input type="password" id="PwCheck" required> 
 
    <br />이메일<input type="email" name="Email"> 
 
    <br />성별 
    <input type="radio" name="gender" value="male" checked>남자
    <input type="radio" name="gender" value="female">여자 

  
    <br />생일<input type="date" name="Bd"> 
 
    <br />좋아하는 색깔 <input type="color" name="Color" value="#000000">
 
    <br />관심분야
    <br /><input type="checkbox" id="interest1" value="학습">학습
    <input type="checkbox" id="interest2" value="동요">동요
    <input type="checkbox" id="interest3" value="책">책
    <input type="checkbox" id="interest4" value="뷰티">뷰티
    <input type="checkbox" id="interest5" value="캐릭터">캐릭터

 
    <br /><br />
    <input value="등록" type="button" v-on:click.prevent="checkUser">
    <input type="reset" value="취소">

  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$http = axios


export default {
  name:'Join',
  data() {
    return {
      user: {
        id: '',
        password: '',
        name: ''
      }
    }
  },
  methods: {
    checkUser() {
      const baseURI = 'http://localhost:8000/signUp/register';
      this.$http.post(`${baseURI}`, {"name":this.name, "office":this.office, user: this.user})
      .then((response) => {
        if (response.data.result === 0) {
          alert('Error, please, try again')
        }
        if (response.data.result === 1) {
          alert('Success')
          this.$router.push('/login') // Login 페이지로 보내줌
        }
      })
      .catch(function (error) {
        alert('error')
        console.log(error)
      })
    }
  }
}
</script>