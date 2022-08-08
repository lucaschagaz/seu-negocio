
import Conteiner from "../../Layout/Conteiner";

import styles from "./DashBoard.module.css";


const DashBoard = (props) => {

  return (
    <nav className={styles.navBar}>
     <Conteiner>
        <div>
          <p>Essa é a Home</p>
        </div>
     </Conteiner>
 </nav>
  );
};

export default DashBoard;
