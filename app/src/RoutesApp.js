// import { useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./Components/Pages/LandingPage";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer"
import Home from "./Components/Pages/Home"
import Contato from "./Components/Pages/Contato"
import Products from "./Components/Pages/Products"
import UsersEdit from "./Components/Pages/UsersEdit"
import Login from "./Components/Pages/Auth/Login"
import Register from "./Components/Pages/Auth/Register"
import NewProject from "./Components/Pages/NewProject"


import Conteiner from "./Components/Layout/Conteiner";

// import { UserContext } from "../../app/src/App";


function RoutesApp() {

  const Private = ({Item}) =>{

    return localStorage.getItem("login") ? <Item/> : <Login/>
  }

  return (
    <div>
      <Router>
        <Header></Header>
        <Conteiner customClass="min-heigth">
          <Routes>
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/Home" element={<Private Item={Home}/>}></Route>
            <Route path="/Contato" element={<Private Item={Contato}/>}></Route>
            <Route path="/Products" element={<Private Item={Products}/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Register" element={<Register/>}></Route>
            <Route path="/UsersEdit" element={<Private Item={UsersEdit}/>}></Route>
            <Route path="/NewProject" element={<Private Item={NewProject}/>}></Route>
          </Routes>
        </Conteiner>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default RoutesApp;
