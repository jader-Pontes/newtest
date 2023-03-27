import { SetStateAction, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

//styled-component
import {Container} from "./styled";

//type
import {Post} from '../../types/post'

//components
import Postinfo from "../../components/PostInfo";

//hook
import { Requisition } from "../../Hooks/useRequest";

//context
import { authContext } from "../../context/Authcontext";


const Dashboard = () => {

  const{user}=useContext(authContext);
  const {userId}=useContext(authContext);
  const [posts,setPosts]=useState<Post[]>([]);
  

  const allPostId=async()=>{
    const {id}=userId
    const value= await Requisition.getAllPosts();
    const postInfo=value.filter((value:Post)=>value.userId===id)
      setPosts(postInfo);
  };
  
  const delPost=(id:number)=>{
    const newValue=posts.filter((data:Post)=> id !== data.id)
      setPosts(newValue);
  };

  useEffect(()=>{
    allPostId();
  },[userId]);

  return (
      <Container className="dashboard">
        <h2>Dashboard</h2>
        <p>Gerencie os seus posts</p>
        {posts && posts.length === 0 ? (
          <div className="noposts">
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">
              Criar primeiro post
            </Link>
          </div>
        ) : (
          <div className="post_header">
            <span>Título</span>
            <span>Ações</span>
          </div>
        )}
        {posts &&
          posts.map((post:Post) => (
            <div className='post_row' key={post.id}>
              <p>{post.title}</p>
              <div className="actions">
                <Link to={`/posts/${post.id}`} className="btn btn-outline">
                  Ver
                </Link>
                <Link to={`/posts/edit/${post.id}`} className="btn btn-outline">
                  Editar
                </Link>
                <button
                  onClick={()=>delPost(post.id)}
                  className="btn btn-outline btn-danger"
                >
                  Excluir
                </button>
              </div>
            </div>
          ))}
      </Container>
    );
  };

export default Dashboard;