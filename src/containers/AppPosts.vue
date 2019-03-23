<template>
    <div>
       <PostsList :posts="posts" @delete-post="deletePost" />          
    </div>
</template>

<script>
import {postsService} from '../services/PostsService'
import PostsList from '../components/PostsList'
export default {
    components: {
        PostsList
    },
    data(){
        return {
            posts:[]
        }
    },
    props:["id"],
    async created() {
        try{
            const{data}=await postsService.getAll();
            this.posts=data;
        } catch(error) {
            console.log(error);
        }
    },
    methods:{
        deletePost(post) {
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
