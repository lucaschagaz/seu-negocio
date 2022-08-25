import loader from "../../../img/Spinner-w.svg"

import styles from "./Loader.module.css" 


function Loading({text}){

    return(
        <div className={styles.loader_Conteiner}>
            <img src={loader} alt="loader" className={styles.loader}>
            </img>
            <h2>{text}</h2>
        </div>
    )
}


export default Loading;