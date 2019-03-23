<template>
    <div>
        <h5>{{ this.comments.length>0 ? 'Comments:' : 'There are no comments...'}}</h5>
        <div v-for="comment in comments" :key="comment.id">
            <div class="comment">
                <p> {{comment.text}} </p>
                <i>Created at:{{comment.createdAt | formatDate}}</i><hr>
           </div>
        </div><br>
    </div>
</template>
<script>
import {DateMixin} from '../mixins'
export default {
    props:["comments"],
    mixins:[DateMixin]
}
</script>

<style>
.comment {
    background-color:rgb(227, 227, 241);
}

</style>