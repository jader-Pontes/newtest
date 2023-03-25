//css
import {Container} from "./styled";
//dependecias
import { useEffect,useState,useContext } from "react";
//Context
import {authContext} from "../../context/Authcontext";
//hook
import { Requisition } from "../../Hooks/useRequest";
//types
import{user} from '../../types/user'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading]=useState<boolean>(false);
  const [users,setUsers]=useState([])  
  const {setUser}=useContext(authContext);
  
  
  const loadUSer=async()=>{
    const usersLoad=await Requisition.getAllUsers()
    setUsers(usersLoad)
  }

  const verify=()=>{
      const values=users
        const checked=values.some((value:any)=>value.email===email)
      if(checked&&password){
        return setUser(true);
      }
        return setUser(false);
  };
  

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
     setEmail('')
     setPassword('')
     verify()
  }

  useEffect(()=>{
      loadUSer()
  },[users])

  return (
    <Container className="login">
      <h1>Entrar</h1>
      <p>Faça o login para poder utilizar o sistema</p>
      <form onClick={handleSubmit}>
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
      </form>
    </Container>
  );
};

export default Login;