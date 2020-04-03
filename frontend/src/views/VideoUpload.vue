<template>
    <div id="Video Upload">
        <div> Video upload</div>
        name : <input v-model="video.name" type="text" id="name" placeholder="name">
        video : <input @change="change($event.target.name, $event.target.files)" type="file" id="file">
        <button v-on:click="upload" >upload</button>
    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    Vue.prototype.$http = axios;

    export default {
        data: function () {
            return {
                file: '',
                video: {
                    id: '',
                    name: '',
                    lookup: '',
                    create_date: '',
                },
            }
        },
        props: ['user'],
        methods: {
            change(name, files){
                this.video.name = name;
                console.log(name);
                this.file = files[0];
                console.log(files[0]);
                console.log("111231");
            },
            upload: function (event) {
                var formData = new FormData();
                console.log(this.file);
                console.log(this.video.name);
                formData.append('name', this.video.name);
                formData.append('file', this.file);
                axios.post('http://localhost:8000/video/upload', formData)
                    .then((response) => {
                        if (response.data.result === 0) {
                            alert('Error, please, try again')
                        }
                        if (response.data.result === 1) {
                            alert('Success');
                            this.$router.push('http://localhost:8000/video/') // 해당 id page 로 보내줌
                        }
                    })
                    .catch(function (error) {
                        alert('123error')
                    })
            }
        }
    }
</script>
