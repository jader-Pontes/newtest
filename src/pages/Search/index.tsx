import { Link } from "react-router-dom";
import { useContext } from "react";
import {Container} from "./styled"

//hooks
import { useQuery } from '../../Hooks/useQuery';
import { Requisition } from "../../Hooks/useRequest";

//components
import Postinfo from '../../components/PostInfo'


const Search = () => {

    const query = useQuery()
    const search = query.get("q");

    const posts=[Requisition.getAllPosts()]
    
    return (
        <div className='search_container'>
        <h1>Resultados encontrados para: {search}</h1>
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
    </div>
    )
}

export default Search