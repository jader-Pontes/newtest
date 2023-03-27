import axios from 'axios';


const url=axios.create({baseURL:'https://jsonplaceholder.typicode.com'});

export const Requisition={
  getAllPosts:async()=>{
    //Pega todos os Posts/
    try{  
      const response=await url.get('/posts')
        return response.data;
    }catch(err){
      console.log(err);
    }    
  },
  getUserInfo:async(id:number)=>{
    //Pega os detalhes de um usuário;
    try{
      const response=await url.get(`/users/${id}`)
        return response.data;
    }catch(err){
      console.log(err);
    }  
  },
  getCommentsPost:async(id:number)=>{
    //Pega somente nome,email,body de um user.
    try{
      const response=await url.get(`/posts/${id}/comments`);
        return response.data;
    }catch(err){
      console.log(err);
    }  
  },
  getAllUsers:async()=>{
    //Pega todas as informações sobre usuários;
    try{
      const response=await url.get('/users');
        return response.data;
    }catch(err){
      console.log(err);
    }
  }
}
