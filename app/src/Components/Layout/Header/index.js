import { Link } from "react-router-dom";

import Conteiner from "../Conteiner";
// import logoHeader from "../../../img/not.png";

import styles from "./Header.module.css";
import { useState } from "react";


const Header = (props) => {

   const [logged, setLogged] = useState(props.isLogged)

  return (
    <nav className={styles.navBar}>
     <Conteiner>
         <Link to="/">
            
             <h3>Seu Negocio</h3>
         </Link>
        {!logged && 
         <div className={styles.Link_header}>
            <Link to="/Register">
               Register
            </Link>
            <Link to="/Login">
               Login
            </Link>
         </div>
        }
        {logged && 
            <ul className={styles.list}>
               <li className={styles.listItem}>
                  <Link to="/">Landing Page</Link>
               </li>
               <li className={styles.listItem}>
                  <Link to="/Home">Home</Link>
               </li>
               <li className={styles.listItem}>
                  <Link to="/Products">Produtos</Link>
               </li>
               <li className={styles.listItem}>
                  <Link to="/DashBoard">DashBoard</Link>
               </li>
               <li className={styles.listItem}>
                  <Link to="/UsersEdit">Editar Usuario</Link>
               </li>
            </ul>
        }
     </Conteiner>
 </nav>
  );
};

export default Header;


