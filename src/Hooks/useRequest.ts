import axios from 'axios';

//types
import {UsersTypes} from '../types/users'
import { Post } from './../types/post';

const url=axios.create({url:'https://jsonplaceholder.typicode.com'});

export const Requisition={
  getAllPosts:async()=>{
    const response=await url.get('/posts')
      return response.data;
  },
  getUserInfo:async(id:number)=>{
    const response=await url.get(`users/${id}`)
      return response.data;
  },
  getCommentsPost:async(id:number)=>{
    const response=await url.get(`/posts/${id}/comments`);
      return response.data;
  },
  getToken:async(username:string,password:string)=>{
      /*
        Demostração de como enviar via axios token para autenticação.
      */
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');
    const url='https://...'
    const data={};
    axios.post(url,data,{headers:{'Authorization':`Basic${token}`}});
  },
  getAllUsers:async()=>{
    const response=await url.get('/users')
       return response.data;
  }
}
