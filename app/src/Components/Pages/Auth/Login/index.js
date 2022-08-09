import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

import Conteiner from "../../../Layout/Conteiner";
import FormUser from "../../../Layout/formUser";

import styles from "./Login.module.css";

const Login = () => {
  
  const [erro, setErro] = useState();
  const [isLogged, setLogged] = useState(false)
  const navigate = useNavigate();

  function acessLogin({ email, password }) {
    axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    }).then((response)=> {
      console.log(response)
      localStorage.setItem("login", JSON.stringify({
        userLogin: true,
        token: response.data.access_token
      }))
      setErro("")
      setLogged(!isLogged)
      if(!isLogged){
        navigate("/Home")
      }
    }).catch((error) => {
      setErro(error.response.data.message)
      if(!isLogged){
        setTimeout(() => {
          navigate("/Register")
        }, 2000);
      }
    })
  }

  return (
    <Conteiner customClass="center">
      <div className={styles.form_conteiner}>
        <h1>
          Seu <span>Negocio</span>
        </h1>
        <h2>Fazer login:</h2>
        {erro && <p className={styles.message_login}>{erro}</p>}
        <FormUser handleSubmit={acessLogin} btnText="Entrar"></FormUser>
        <p>
          não tem conta? <Link to="/register">Registre-se aqui</Link>
        </p>
      </div>
    </Conteiner>
  );
};

export default Login;





