//css
import {Container} from "./styled";

import { ReactElement, ReactHTMLElement, useEffect, useState } from "react";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading,setloading]=useState(false)


  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      setEmail('');
      setPassword('')
      setConfirmPassword('')
      setError("")
      /*
        faltou um endpoint para enviar para um DB;
        requisição não vem com senha criando apenas para mostrar capacidade;
      */
  };


  return (
    <Container className='register'>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do usuário"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira a senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme a senha"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </label>
        {!loading && <button className="btn">Entrar</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {error && <p className="error">{error}</p>}
      </form>
    </Container>
  );
};

export default Register;