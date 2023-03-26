import { useParams } from "react-router-dom";

// CSS
import {Container} from "./styled";

// Hooks
import { Requisition } from "../../Hooks/useRequest";
import { request } from "https";

//types
import{UsersTypes} from '../../types/users'
import { Post } from "../../types/post";

const PostBlog = () => {
  const { id } = useParams();
    const post:any=Requisition.getAllPosts;

  return (
    <Container>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <h3>Este post trata sobre:</h3>
        </>
      )}
    </Container>
  );
};

export default PostBlog;