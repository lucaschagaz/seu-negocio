import {Link} from "react-router-dom"


function Headerlinks(){
    return(
        <ul className={styles.list}>
             <li className={styles.listItem}>
                 <Link to="/">Home</Link>
             </li>
             <li className={styles.listItem}>
                 <Link to="Projects">Projetos</Link>
             </li>
             <li className={styles.listItem}>
                 <Link to="Company">Empresa</Link>
             </li>
             <li className={styles.listItem}>
                 <Link to="Contact">Contato</Link>
             </li>
         </ul>
    )
}


export default Headerlinks;