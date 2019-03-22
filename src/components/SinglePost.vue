<template>
    <div>
       <h1>{{post.title}}</h1>
       <p>{{post.text}}</p>
       <small>createdAt: {{post.createdAt|formatDate}} </small>

       <AddComment :comment="comment" @add-comment="addComment"/>

       <h3>Comments</h3>
      
        <CommentList :comments="comments"/>      
    </div>
</template>

<script>
import {postsService} from '../services/PostsService'
import AddComment from './AddComment'
import CommentList from './CommentList'
import {DateMixin} from '../mixins'


export default {
    components:{
        AddComment,
        CommentList
    },

    mixins:[DateMixin],

    
    data(){
        return {
            post:{},
            comment:{},
        }
    },
    props:["id"],
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

</style>
