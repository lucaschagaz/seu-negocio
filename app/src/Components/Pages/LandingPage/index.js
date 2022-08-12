
import Conteiner from "../../Layout/Conteiner"
import Inventario from "../../../img/controller.png"
import LinkButton from "../../Layout/LinkButton"


import styles from "./LandingPage.module.css"


function LandingPage(){

    return(
       <Conteiner>
            <div className={styles.landing_conteiner}>
                <h1>Controle o seu <span>Negocio</span></h1>
                <h2>O melhor amiga do seu negocio!</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                <LinkButton text="Crie seu Conta agora" to="/Register"></LinkButton>
            </div>
            {/* <div className={styles.landing_image}>
                <img src={Inventario} alt="inventario"></img>
            </div> */}
       </Conteiner>
    )

}


export default LandingPage