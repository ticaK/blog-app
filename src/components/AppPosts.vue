<template>
    <div>
       
            <div v-for="post in posts" :key="post.id">
                <!-- <h5>{{post.id}}</h5> -->
                <h1>{{post.title}}</h1>
                <p>{{post.text}}</p>
                <router-link :to="{ name: 'single-post', params: {id: post.id}}">
                   View Post
                </router-link> <br>

               <router-link :to="{ name: 'edit', params: { id: post.id }}">
                   Edit post
                 </router-link> <br>
                
                <button @click="deletePost(post)">Delete</button>

            </div>
            
    </div>
</template>

<script>
import {postsService} from '../services/PostsService'
export default {
    data(){
        return {
            posts:[]
        }
    },
    props:["id"],
    async created(){
        try{
            const{data}=await postsService.getAll();
            this.posts=data;
        } catch(error) {
            console.log(error);
        }
    },
    methods:{
        deletePost(post){
            postsService.delete(post.id)
            .then((success)=>{
            this.posts = this.posts.filter(p => p !== post)
            })
            .catch((error)=>{
                concole.log(error);
            })
        }

        
      }  
      
 

}
</script>

<style>

</style>
