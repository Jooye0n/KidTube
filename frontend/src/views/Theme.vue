<template>
  <div>
    테마
    <h1>{{this.$route.params.id}}</h1> 
   
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$http = axios


export default {

  name:'Theme',
  data(){
    return{
    //post:{id:'', title:'', content:''},
     id : this.$route.params.id
    }
   
  }/*
  mounted() {
    var that = this;
    
    
    
    axios.get('http://localhost:8888/post/'+this.$route.params.id)
    .then(function(response) {
          if(response.status = 200) {
            that.post = response.data;                 
          } else {
            console.log('error');
          }
         })
        .catch(function(error) {
          console.log(error);
        });
      
  },
  beforeRouteUpdate(to, from, next){
    var that = this;
    axios.get('http://localhost:8888/post/'+to.params.id)
    .then(function(response) {
          if(response.status = 200) {
            that.post = response.data;                 
          } else {
            console.log('error');
          }
     })
    .catch(function(error) {
      console.log(error);
    });
    
    next();
  }
  */

      
  
}
</script>