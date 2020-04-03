<template>
  <div>
    <h1>{{this.$route.params.UserName}}의 채널</h1> 
    동영상 올리기
    <button @click="uploadVideo()" >동영상 업로드</button>
   
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$http = axios


export default {
    name:'myChannel',
    data () {
         return {
            UserName: ''
        }
    },
    created() {
        this.UserName= this.$route.params.UserName;
    },
    methods : {
        uploadVideo(){
            alert("비디오 업로드 페이지로 이동")
            // 리다이렉트 처리
            this.$router.push({
            path: '/videoUpload/'+this.UserName});
        }
      
    },
}

</script>