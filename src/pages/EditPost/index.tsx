import React,{useState,useEffect} from "react";
import {useNavigate,useParams} from 'react-router-dom'
//types
import { Post } from "../../types/post";


const EditPost = () => {
  const { id } = useParams();


  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [formError, setFormError] = useState("");
  const [error,setError]=useState();
  const [loading,setLoading]=useState();
  const [post,setPost]=useState<Post>();


  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");
  }
  
  return (
    <div className='edit_post'>
      {post && (
        <>
          <h2>Editando post: {post.title}</h2>
          <p>Altere os dados do post como desejar</p>
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
            <p className='preview_title'>Preview da imagem atual:</p>
            <img
              className='image_preview'
              src={post.image}
              alt={post.title}
            />
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
            {!loading && <button className="btn">Editar</button>}
            {loading && (
              <button className="btn" disabled>
                Aguarde.. .
              </button>
            )}
            
          </form>
        </>
      )}
    </div>
  );
};

export default EditPost;