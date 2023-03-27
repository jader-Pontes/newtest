import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//css
import {Container} from './styled';



const Postinfo = ({post}:any) => {

  return (
    <Container className='post_detail' key={post.id}>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Ler
      </Link>
    </Container>
  );
};

export default Postinfo;