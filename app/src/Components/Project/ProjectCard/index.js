import styles from "./Card.module.css"

import {BsPencil, BsFillTrashFill} from "react-icons/bs"
import {Link} from "react-router-dom"



function ProjectCard({name, bugdet, category}){

    return(
        <div className={styles.Card}>
           <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> R${bugdet}
            </p>
            <p className={styles.category_text}>
                <span className={`${styles[category.name.toLowerCase()]}`}></span>{category.name}
            </p>
            <div className={styles.project_card_actions}>
                <Link to={"/SingleProject"}>
                    <BsPencil></BsPencil>Editar
                </Link>
                <button>
                    <BsFillTrashFill></BsFillTrashFill>Remover
                </button>
            </div>
        </div>
    )
}


export default ProjectCard;