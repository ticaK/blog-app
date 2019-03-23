<template>
    <div>
        <div v-for="post in posts" :key="post.id">
            <h1>{{post.title}}</h1>
            <p>{{post.text}}</p>
            <router-link :to="{ name: 'single-post', params: {id: post.id}}">
                View Post
            </router-link> <br>

            <router-link :to="{ name: 'edit', params: { id: post.id }}">
                Edit post
                </router-link> <br>
            
            <button class="btn btn-danger" @click="deletePost(post)">Delete</button>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            deletePost(post){
                this.$emit('delete-post',post)
            }
        }
    },
    props:["posts"] 
}
</script>

<style>

</style>
