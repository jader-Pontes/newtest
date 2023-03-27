import { Link } from "react-router-dom";
import { useState } from "react";

//styled-components
import {Container} from './styled'

// components
import Postinfo from "../../components/PostInfo";

const Search = () => {

  const [posts,setPosts]=useState([])
    /*
        Falta função para buscar posts no endpoint
    */

  return (
    <Container className="search_container">
      <h1>Resultados encontrados para: {'search'}</h1>
      <div className="post-list">
        {posts && posts.length === 0 && (
          <>
            <p>Não foram encontrados posts a partir da sua busca...</p>
            <Link to="/" className="btn btn-dark">
              Voltar
            </Link>
          </>
        )}
        {posts && posts.map((post:any) => <Postinfo key={post.id} post={post} />)}
      </div>
    </Container>
  );
};

export default Search;