//css
import {Nav} from "./styled"

//dependencia
import { NavLink } from 'react-router-dom';
import {useContext} from 'react'

//context
import {authContext} from '../../context/Authcontext'

const Navbar = () => {

    const {user}=useContext(authContext)

  return (
    <Nav className='navbar'>
      <NavLink className='brand' to="/">
        Mini <span>Blog</span>
      </NavLink>
      <ul className='links_list'>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active': "")}
          >
            Home
          </NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? 'active' : "")}
              >
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? 'active' : "")}
              >
                Cadastrar
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink
                to="/posts/create"
                className={({ isActive }) => (isActive ? 'active' : "")}
              >
                Novo post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? 'active' : "")}
              >
                Dashboard
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : "")}
          >
            Sobre
          </NavLink>
        </li>
        {user && (
          <li>
            <button>Sair</button>
          </li>
        )}
      </ul>
    </Nav>
  );
};
    export default Navbar