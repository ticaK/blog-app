<template>
    <div>
        <div v-for="comment in comments" :key="comment.id">
            {{comment.text}}
        </div>
    </div>

</template>
<script>
export default {
    props:["comments"]


}
</script>

<style>

</style>
