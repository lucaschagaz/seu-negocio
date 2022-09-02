import styles from "./ServicesCard.module.css"

import { BsFillTrashFill } from "react-icons/bs"



function ServiceCard({name, cost, description, id, handleRemove}){

    const remove= (e) =>{
        e.preventDefault()
        handleRemove(id, cost)
    }

    return(
        <div className={styles.Card}>
           <h4>{name}</h4>
            <p>
                <span>Custo do serviço:</span> R${cost}
            </p>
            <p> 
                <span>Descricao: </span> {description}
            </p>
            <div className={styles.project_card_actions}>
                {/* <Link to={`/SingleProject/${id}`}>
                    <BsPencil></BsPencil>Editar
                </Link> */}
                <button onClick={remove}>
                    <BsFillTrashFill></BsFillTrashFill>Remover
                </button>
            </div>
        </div>
    )
}


export default ServiceCard;