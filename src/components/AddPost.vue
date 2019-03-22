<template>
    <div>
        <h1>{{ this.post.id ? 'Edit post' : 'Add post'}}</h1>
        
         <form @submit.prevent="onSubmit">

            <div class="form-group"> 
                <label>Title:</label>
                <input type="text" class="form-control" minlength=2 required v-model="post.title" >
            </div>

            <div class="form-group"> 
                <label>Body:</label>
                <input type="text" class="form-control" maxlength="300"  v-model="post.text" required >
            </div>
            <button class="btn btn-success" type="submit">Add post</button>
            <button class="btn btn-danger" type="reset">Reset</button>
            
            

            </form>
    </div>
</template>

<script>
import {postsService} from '../services/PostsService'

export default {
    data(){
        return {
            post:{title:"",text:""}
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
form{
    margin :50px
}
</style>
