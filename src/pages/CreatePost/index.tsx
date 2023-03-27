import React,{useContext,useState} from "react";
import {useNavigate} from  'react-router-dom'

//styled-components
import {Container} from './styled'


const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [formError, setFormError] = useState("");
  const [loading,setLoading]=useState(Boolean);
  const [error,setError]=useState();


  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
      setFormError("");
      setTitle('');
      setImage('');
      setTags([]);
      setBody('');
      setError(undefined)
    setLoading(false)    

  }

  return (
    <Container className="create_post">
      <h2>Criar post</h2>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="text"
            required
            placeholder="Pense num bom título..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>URL da imagem:</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insira uma imagem que representa seu post"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Conteúdo:</span>
          <textarea
            name="body"
            required
            placeholder="Insira o conteúdo do post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <label>
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas por vírgula"
            onChange={(e) => setTags([e.target.value])}
            value={tags}
          />
        </label>
        {!loading && <button className="btn">Criar post!</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde.. .
          </button>
        )}
        {(error) && (
          <p className="error">{error || formError}</p>
        )}
      </form>
    </Container>
  );
};

export default CreatePost;