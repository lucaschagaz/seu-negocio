import { useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./Components/Pages/LandingPage";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer"
import Home from "./Components/Pages/Home"
import Contato from "./Components/Pages/Contato"
import Projects from "./Components/Pages/Projects"
import Login from "./Components/Pages/Auth/Login"
import Register from "./Components/Pages/Auth/Register"
import SingleProject from "./Components/Pages/SingleProject"
import NewProject from "./Components/Pages/NewProject"

import Conteiner from "./Components/Layout/Conteiner";


import { UserContext } from "../src/App";


function RoutesApp() {

  const { state, dispatch } = useContext(UserContext);

  // useEffect(() => {

  //   return function cleanup() { 
  //     localStorage.removeItem("login")
  //     dispatch({ type: "USER", payload: false })
  //   };

  // }, []);

  const Private = ({Item}) =>{

    return localStorage.getItem("login") ? <Item/> : <Login/>
  }

  return (
      <Router>
        <Header></Header>
        <Conteiner customClass="min-heigth">
          <Routes>
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/Home" element={<Private Item={Home}/>}></Route>
            <Route path="/Contato" element={<Private Item={Contato}/>}></Route>
            <Route path="/Projects" element={<Private Item={Projects}/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Register" element={<Register/>}></Route>
            <Route path="/SingleProject/:id" element={<Private Item={SingleProject}/>}></Route>
            <Route path="/NewProject" element={<Private Item={NewProject}/>}></Route>
          </Routes>
        </Conteiner>
        <Footer></Footer>
      </Router>
  );
}

export default RoutesApp;
