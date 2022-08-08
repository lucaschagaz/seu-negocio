import loader from "../../../img/loading.svg"

import styles from "./Loader.module.css" 


function Loading(){

    return(
        <div className={styles.loader_Conteiner}>
            <img src={loader} alt="loader" className={styles.loader}>
            </img>
        </div>
    )
}


export default Loading;