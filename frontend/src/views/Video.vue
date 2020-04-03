<template>
  <div>
    <h1>비디오 페이지</h1>
      비디오 이름:{{this.VideoName}} 

    

      <video id="example_video_1" class="video-js vjs-default-skin"
        controls preload="auto" width="640" height="264"
        poster="../assets/music.png"
        data-setup='{"example_option":true}'>
        

        <!--여기서 소스에서 s1.mp4를 this.VideoName으로 대체-->
       <source  id ="imgsrc"  type="video/mp4" />

        
      </video>

    <form class="comment" method="post" @submit.prevent="addComment">
      <h2> 댓글 입력하기 </h2>
      작성자:<input type="text" v-model="writer"/>
      댓글창:<input type="text" v-model="content"/>
     
      <button type="submit">입력하기</button>
    </form>

    <h2>댓글 목록</h2>
      <div v-for="comment in comments" :key="comment.writer">
        <p>작성자:{{ comment.writer }} 내용:{{ comment.content }}</p>
    </div>   
  </div>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$http = axios

export default {
  name:'Video',
  data(){
    return{
     VideoName : "",
     comments:[]
    }
  },
  created() {
        this.VideoName= this.$route.params.VideoName;
  },
  mounted() {
    var $src = this.VideoName;
    document.getElementById("imgsrc").src = 'http://localhost:8000/video/'+$src;


    var that = this;
    //비디오 받아와 mount
    axios.get('http://localhost:8000/video/commentsList/'+this.VideoName)  //경로 8000/video/:비디오명 에서 받아옴
    .then(function(response) {
      if(response.status = 200) {
        that.comments = response.data;               
      } else {
        console.log('error');
      }
    })
    .catch(function(error) {
      console.log(error);
    })
  },
  methods:{
     addComment(){
          axios.post('http://localhost:8000/video/addCommet/'+this.VideoName, 
          {
            writer:this.writer,
            content:this.content,
            videoName: this.VideoName
          })
      .then(res=>{
        console.log(res.data)
      })
    }
  }
   

}


</script>
