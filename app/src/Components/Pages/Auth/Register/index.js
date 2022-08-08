import { useState } from "react"
import {Link, useNavigate} from "react-router-dom";
import axios from "axios"


import Conteiner from "../../../Layout/Conteiner";
import FormUser from "../../../Layout/formUser";


import styles from "./Register.module.css";


const Register = () => {

  const [erro, setErro] = useState();
  const navigate = useNavigate();

  function acessRegister({ email, password }) {
    axios.post("http://localhost:5000/api/auth/register", {
      email,
      password,
    }).then((response)=> {

      console.log(response)
      localStorage.setItem("login", JSON.stringify({
        userLogin: true,
        token: response.data.access_token
      }))
      setErro("")
      navigate("/Login")
    }).catch((error) =>{
      setErro(error.response.data.message)
    })
  }


  return (
    <Conteiner customClass="center">
      <div className={styles.register_conteiner}>
        <h1> 
          Seu <span>Negocio</span>
        </h1>
        <h2>Crie uma Conta:</h2>
        {erro && <p className={styles.message_register}>{erro}</p>}
        <FormUser handleSubmit={acessRegister} btnText="Registrar"></FormUser>
        <p>Já possui conta? <Link to="/Login">Faça login aqui</Link></p>
      </div>
    </Conteiner>
  );
}

export default Register;
