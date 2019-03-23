<template>
    <div>
        <form @submit.prevent="addComment">
            <div class="form-group"> 
                <textarea rows="4" cols="50" placeholder="add comment.." required v-model="comment.text">
                </textarea>
            </div>
            <button class="btn btn-success" type="submit">Add comment</button>    
        </form>
        <!-- napomena: mogla sam napraviti i CommentForm.vue, ali nema potrebe, realno -->
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
