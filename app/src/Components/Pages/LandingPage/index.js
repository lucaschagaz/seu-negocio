import LinkButton from "../../Layout/LinkButton";

import styles from "./LandingPage.module.css";

function LandingPage() {
  return (
    <div className={styles.landing_conteiner}>
      <h1>
        Controle o seu <span>Negocio</span>
      </h1>
      <h2>O melhor amiga do seu negocio!</h2>
      <LinkButton text="Crie seu Conta agora" to="/Register"></LinkButton>
    </div>
  );
}

export default LandingPage;
