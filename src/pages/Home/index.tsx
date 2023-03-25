import { useNavigate, Link } from "react-router-dom";
import {useState } from "react";

// CSS
import * as C from "./styled";

//Hook
import {Requisition} from '../../Hooks/useRequest'

//Components
import PostDetail from "../../components/PostInfo";

//types
import { Post } from "../../types/post";

const Home = () => {
  

  const navigate = useNavigate();
  const [posts,setPosts]=useState([Requisition.getAllPosts])
  const [loading,setloading]=useState<boolean>(false);
  const [query, setQuery] = useState("");

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setloading(true);
    if (query) {
      return navigate(`/search?q=${query}`);
    }
    setloading(false)
  };

  return (
    <C.Container >
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
          <div className={C.Container.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">
              Criar primeiro post
            </Link>
          </div>
        )}
        {posts && posts.map((post,index) => <PostDetail key={index} post={post} />)}
      </div>
    </C.Container>
  );
};

export default Home;