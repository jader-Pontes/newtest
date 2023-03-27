import { useNavigate, Link } from "react-router-dom";
import {useState,useEffect } from "react";

//styled-components
import {Container} from "./styled";

//Hook
import {Requisition} from '../../Hooks/useRequest'

//Components
import Postinfo from "../../components/PostInfo";

//types
import { Post } from "../../types/post";

const Home = () => {
  
  const navigate = useNavigate();
  
  const [loading,setloading]=useState<boolean>(false);
  const [query, setQuery] = useState("");



  const [posts,setPosts]=useState<Post[]>([]);

  //Pega todos os Posts
  const allPost=async()=>{
    const value= await Requisition.getAllPosts();
      setPosts(value);
  };
  
  useEffect(()=>{
      allPost();  
  },[posts]);
 

//Pegando a quey na url
//falta terminar logica e implementar
//Barra de pesquisa
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setloading(true);
    if (query) {
      return navigate(`/search?q=${query}`);
    }
    setloading(false)
  };

  return (
    <Container >
      <h1>Veja os nossos posts mais recentes</h1>
      <form  onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ou busque por tags..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div className="post-list">
        {loading && <p>Carregando...</p>}
        {posts && posts.length === 0 && (
          <div className='noposts'>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">
              Criar primeiro post
            </Link>
          </div>
        )}
        {posts && posts.map((post:Post,index) => <Postinfo key={index} post={post} />)}
      </div>
    </Container>
  );
};

export default Home;