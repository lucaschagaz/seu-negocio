import { Link, useNavigate } from "react-router-dom";
import { BsFillCaretDownFill } from "react-icons/bs"


import Conteiner from "../Conteiner";
import DropDown from "../DropDown";

import styles from "./Header.module.css";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../src/App";

const Header = () => {


  const navigate = useNavigate();
  
  const [dropShow, setDropShow] = useState(true)
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    if(localStorage.getItem("login")){
      dispatch({ type: "USER", payload: true })
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("login");
    dispatch({ type: "USER", payload: false });
    navigate("/");
  };

  const showDropDown = () =>{
    setDropShow(!dropShow)
  }

  return (
    <nav className={styles.navBar}>
      {state && (
        <Conteiner customClass="header">
          <Link to="/Home">
            <h3>
              <span></span>Seu Negocio
            </h3>
          </Link>
          <div className={styles.logo_header}>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Link to="/Home">Home</Link>
              </li>
              <li className={styles.listItem}>
                <Link to="/Projects">Projetos criados</Link>
              </li>
              <li className={styles.listItem}>
                <Link to="/Contato">Contato</Link>
              </li>
            </ul>
          </div>
          <div className={styles.headerUser}>
              <div className={styles.menu}>
                <li onClick={showDropDown}> 
                  NOME
                  {!dropShow && <DropDown isActive={dropShow}/> }
                </li>
                <BsFillCaretDownFill/>
              </div>
              <button onClick={logout}>LogOut</button>
          </div>
        </Conteiner>
      )}
      {!state && (
        <Conteiner>
          <Link to="/">
            <h3>Seu Negocio</h3>
          </Link>
          <div className={styles.Link_header}>
            <Link to="/Register">Register</Link>
            <Link to="/Login">Login</Link>
          </div>
        </Conteiner>
      )}
    </nav>
  );
};

export default Header;
