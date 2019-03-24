import axios from 'axios';
const http = axios.create({
    baseURL:"http://localhost:3000/API"
});

export default class PostsService {

    getAll() {
        return http.get('/posts');  
    }

    get (id) {
        return http.get(`/posts/${id}?filter={"include":["comments"]}`);
    }

    add(post) {
        return http.post('/posts',post);
    }

    edit(post) {
        return http.put(`/posts/${post.id}`,post)
    }

    delete(id){
        return http.delete(`/posts/'${id}`);
    }

    addComment (comment, postId){
        return http.post(`/posts/${postId}/comments`,comment);
        
    }

    deleteComment(commentId, postId){
        return http.delete(`/posts/${postId}/comments/${commentId}`)

    }



    

  
    
    
   
    
}


 export const postsService = new PostsService();