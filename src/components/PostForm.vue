<template>
    <div>
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
export default {
    methods:{
        onSubmit(){
            this.$emit('on-submit');
        }
    },
    props:["post"]
}
</script>

<style scoped>
form{
    margin :50px
}
</style>
