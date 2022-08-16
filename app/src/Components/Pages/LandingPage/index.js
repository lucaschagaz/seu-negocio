import LinkButton from "../../Layout/LinkButton";

import styles from "./LandingPage.module.css";

function LandingPage() {
  return (
    <div className={styles.landing_conteiner}>
      <h1>
          Controle os seus <span>Projetos</span>
      </h1>
      <h2>Ferramenta de auxilio no gerenciamneto de projetos.</h2>
      <LinkButton text="Crie seu conta agora" to="/Register"></LinkButton>
    </div>
  );
}

export default LandingPage;
