import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

import Conteiner from "../../../Layout/Conteiner";
import FormUser from "../../../Layout/formUser";

import styles from "./Login.module.css";
import { UserContext } from "../../../../App";

const Login = () => {

  const {state, dispatch} = useContext(UserContext)

  const [erro, setErro] = useState();
  const [redirectToHome, setRedirectToHome] = useState(false)
  const [redirectToRegister, setRedirectToRegister] = useState(false)
  const navigate = useNavigate();


  function acessLogin({ email, password }) {
    axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    }).then((response)=> {
      console.log(response)
      localStorage.setItem("user", JSON.stringify({email: email, password: password}))
      localStorage.setItem("login", JSON.stringify({
        userLogin: true,
        token: response.data.access_token
      }))
      dispatch({type: "USER", payload: true})
      setErro("")
      setRedirectToHome(true)
    }).catch((error) => {
      setErro(error.response.data.message)
      setRedirectToRegister(true)
    })
  }

  if(redirectToHome){
    return navigate("/Home")
  }
  else if(redirectToRegister){
    setTimeout(() => {
      navigate("/Register")
    }, 3000);
  }

  return (
    <Conteiner customClass="center">
      <div className={styles.form_conteiner}>
        <h1>
          Seu <span>Negocio</span>
        </h1>
        <h2>Fazer login:</h2>
        <FormUser handleSubmit={acessLogin} btnText="Entrar"></FormUser>
        <p>
          não tem conta? <Link to="/register">Registre-se aqui</Link>
        </p>
        {erro && <p className={styles.message_login}>{erro}</p>}
      </div>
    </Conteiner>
  );
};

export default Login;





