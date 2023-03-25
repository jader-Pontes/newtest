import {Container} from "./styled";
import { useEffect, useState,useContext } from "react";

//Context
import {authContext} from "../../context/Authcontext";
import { Requisition } from "../../Hooks/useRequest";

//types
import { UsersTypes } from "../../types/users";
import { user} from '../../types/user'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading,setLoading]=useState<boolean>(false);
    
  const {user}=useContext(authContext);



  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


  };

  // useEffect(() => {
  //   console.log(authError);
  //   if (authError) {
  //     setError(authError);
  //   }
  // }, [authError]);

  return (
    <Container className="login">
      <h1>Entrar</h1>
      <p>Faça o login para poder utilizar o sistema</p>
      <form onSubmit={handleSubmit}>
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

export default Login;