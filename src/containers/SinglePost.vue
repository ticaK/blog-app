<template>
    <div>
        <div class="single-post">
            <h1>{{post.title}}</h1>
            <p>{{post.text}}</p>
            <i>created at: {{post.createdAt|diffForHumans}} </i>
        </div> <br>
       <AddComment :comment="comment" @add-comment="addComment"/><br>

      <CommentList :comments="comments"/>      
    </div>
</template>

<script>
import {postsService} from '../services/PostsService'
import AddComment from '../containers/AddComment'
import CommentList from '../components/CommentList'
import {DateMixin} from '../mixins'


export default {
    components:{
        AddComment,
        CommentList
    },

    data(){
        return {
            post:{},
            comment:{},
        }
    },

    props:["id"],

    mixins:[DateMixin],

    async created() {
        try{
            const{data}=await postsService.get(this.id);
            this.post=data;
        } catch(error){
            console.log(error);
        }
    },
    methods:{
        addComment(){
            postsService.addComment(this.comment,this.post.id)
                .then((success) => {
                    this.comments.push(this.comment)
                    this.comment = {}
                }).catch((error)=>{
                         console.log(error)
                })
      }
 
    },
    computed: {
        comments() {
            return this.post.comments
        }
    } 
}
</script>

<style>
    .single-post{
        background-color: rgb(230, 230, 236);
    }
</style>
