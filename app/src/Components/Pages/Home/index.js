import LinkButton from "../../Layout/LinkButton";
import styles from "./Home.module.css"

function Home(){

    return(
        <div className={styles.home_Conteiner}>
            <h1>
                Controle os seus <span>Projetos</span>
            </h1>
            <h2>Ferramenta de auxilio no gerenciamneto de projetos.</h2>
            <LinkButton text="Crie um novo projeto" to="/NewProject"></LinkButton>
        </div>
    )

}



export default Home;