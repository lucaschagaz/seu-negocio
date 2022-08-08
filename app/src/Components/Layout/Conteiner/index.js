import styles from "./conteiner.module.css"


function Conteiner(props){

    return(
    <div className={`${styles.container} ${styles[props.customClass]}`}>
        {props.children}
    </div>
    )
}

export default Conteiner