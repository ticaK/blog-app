<template>
    <div>
        <h1>{{ this.post.id ? 'Edit post' : 'Add post'}}</h1>
        <PostForm @on-submit="onSubmit"  :post="post"/> 
    </div>
</template>

<script>
import {postsService} from '../services/PostsService'
import PostForm from '../components/PostForm'
export default {

    components: {
        PostForm
    },
    data(){
        return {
            post:{}
        }
    },
    methods:{
       onSubmit () {
            if (this.post.id) {
                this.editPost()
            }else {
                this.addPost()
            }
       },
       
        addPost() {                
            postsService.add(this.post)
            .then((success) => {
                this.post = {}
                this.$router.push('/posts')
            }).catch((error)=>{
                    console.log(error)
            })

        },

        editPost(){
            postsService.edit(this.post)
            .then((success)=>{
            this.$router.push('/posts')
            }).catch((error)=>{
            console.log(error)
            })
       }
    },

        created () {
        this.$route.params.id && postsService.get(this.$route.params.id)
        .then((response) => {
            this.post = response.data
        })
    }
  
}
</script>

<style scoped>

</style>
