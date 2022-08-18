import styles from "./Card.module.css"

import { Link } from "react-router-dom"
import {BsPencil, BsFillTrashFill} from "react-icons/bs"



function ProjectCard({name, bugdet, category, id, handleRemove}){

    const remove= (e) =>{
        e.preventDefault()
        handleRemove(id)
    }

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
                <Link to={`/SingleProject/${id}`}>
                    <BsPencil></BsPencil>Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill></BsFillTrashFill>Remover
                </button>
            </div>
        </div>
    )
}


export default ProjectCard;