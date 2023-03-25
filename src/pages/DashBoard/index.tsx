import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//styled-component
import {Container} from "./styled";

//type
import {Post} from '../../types/post'

//hook
import { Requisition } from "../../Hooks/useRequest";

const Dashboard = () => {

  const [posts,setPosts]=useState<Post[]>([])


useEffect(()=>{
  const allPost=async()=>{
    const value= await Requisition.getAllPosts();
    return setPosts(value)
  }
  allPost()  
},[posts])

const deleteDocument=(post:[])=>{

}


  return (
    <Container className='dashboard'>
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
        posts.map((post:any) => (
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
                onClick={() => deleteDocument(post.id)}
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