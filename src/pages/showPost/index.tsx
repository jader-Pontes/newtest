// styled-components
import {Container} from "./styled";

// hooks
import { useParams } from "react-router-dom";
import { useState } from "react";

const Post = () => {
  const { id } = useParams();

  const [post,setPosts]=useState<any>([])
 
  /*
      Falta criar uma função fazendo uma requisição com o query string para o endpoint.
  */


  return (
    <Container className='post_container'>
      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} />
          <p>{post.body}</p>
          <h3>Este post trata sobre:</h3>
          <div className="tags">
            {post.tags.map((tag:any) => (
              <p key={tag}>
                <span>#</span>
                {tag}
              </p>
            ))}
          </div>
        </>
      )}
    </Container>
  );
};

export default Post;