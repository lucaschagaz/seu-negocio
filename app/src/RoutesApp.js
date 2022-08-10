import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./Components/Pages/LandingPage";
import Header from "./Components/Layout/Header";
import Home from "./Components/Pages/Home"
import DashBoard from "./Components/Pages/DashBoard"
import Products from "./Components/Pages/Products"
import UsersEdit from "./Components/Pages/UsersEdit"
import Login from "./Components/Pages/Auth/Login"
import Register from "./Components/Pages/Auth/Register"

import Conteiner from "./Components/Layout/Conteiner";

const Private = ({Item}) =>{

  // const logged = false
  return localStorage.getItem("user") ? <Item/> : <Login/>
}

function RoutesApp() {
  return (
    <div>
      <Router>
        <Header isLogged={false}></Header>
        <Conteiner>
          <Routes>
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/Home" element={<Private Item={Home}/>}></Route>
            <Route path="/DashBoard" element={<Private Item={DashBoard}/>}></Route>
            <Route path="/Products" element={<Private Item={Products}/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Register" element={<Register/>}></Route>
            <Route path="/UsersEdit" element={<Private Item={UsersEdit}/>}></Route>
          </Routes>
        </Conteiner>
      </Router>
    </div>
  );
}

export default RoutesApp;
