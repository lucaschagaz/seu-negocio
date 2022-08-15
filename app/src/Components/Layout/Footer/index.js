import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa"
import styles from "./Footer.module.css"


function Footer(){

    return(
        <footer className={styles.footer}>
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
        </footer>
    )
}

export default Footer
