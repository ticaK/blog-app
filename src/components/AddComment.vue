<template>
    <div>
        <form @submit.prevent="addComment">

            <div class="form-group"> 
                <label>Text:</label>
                <input type="text" class="form-control" v-model="comment.text" required >
            </div>
     
            <button class="btn btn-success" type="submit">Add comment</button>
            
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    props:["comment"],
    
    methods:{
        addComment(){
            this.$emit('add-comment')
        }
    }
}
</script>

<style>

</style>
