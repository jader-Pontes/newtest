import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {useContext } from "react";

//css
import './App'

//Context
import {authContext, AuthProvider} from './context/Authcontext'

//Components
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashBoard from "./pages/DashBoard";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";

function App() {

  const {user}=useContext(authContext)
 
  return (
    <div className="App">
      <AuthProvider>  
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route 
                path="/posts/create"
                element={user ? <Navigate to="/login" /> : <CreatePost />}
              />
               <Route
                path="/posts/edit/:id"
                element={user ? <Navigate to="/login" /> : <EditPost/>}
              />
              <Route path="/search" element={<Search />} />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" /> }
              />
              <Route
                path="/register"
                element={!user ? <Register /> : <Navigate to="/" />}
              />
              <Route
                path="/dashboard"
                element={user ?<Navigate to="/login" />:<DashBoard />}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>     
    </div>
  );
}

export default App;
