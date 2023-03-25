import axios from 'axios';


const url=axios.create({baseURL:'https://jsonplaceholder.typicode.com'});

export const Requisition={
  getAllPosts:async()=>{
    try{  
      const response=await url.get('/posts')
        return response.data.toString() ;
    }catch(err){
      console.log(err);
    }    
  },
  getUserInfo:async(id:number)=>{
    try{
      const response=await url.get(`/users/${id}`)
        return response.data;
    }catch(err){
      console.log(err);
    }  
  },
  getCommentsPost:async(id:number)=>{
    try{
      const response=await url.get(`/posts/${id}/comments`);
        return response.data;
    }catch(err){
      console.log(err);
    }  
  },
  getAllUsers:async()=>{
    try{
      const response=await url.get('/users')
        return response.data
    }catch(err){
      console.log(err)
    }
  }
}
