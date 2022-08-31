import Conteiner from "../../Layout/Conteiner";

import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa"

import styles from "./Contato.module.css";


const Contato = () => {

  return (
      <div className={styles.contact}>
          <ul className={styles.listIcons}>
            <li className={styles.icons}>
              <FaFacebook></FaFacebook>
            </li>
            <li className={styles.icons}>
                    <FaInstagram></FaInstagram>
            </li>
            <li className={styles.icons}>
              <FaLinkedin></FaLinkedin>
            </li>
            <li className={styles.icons}>
                    <FaTwitter></FaTwitter>
            </li>
          </ul>
          <p className={styles.copywrite}>
            <span>Seu Negocio</span> &copy; 2022 by:lucachagaz@gmail.com
          </p>
        </div>
  );
};

export default Contato;


