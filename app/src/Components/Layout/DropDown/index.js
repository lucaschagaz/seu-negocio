import { Link } from "react-router-dom"
import { GrEdit,  } from "react-icons/gr"
import { useState } from "react"

import  "./DropDown.css"

const DropDown  = (props) =>{

    const [isActive, setIsActive] = useState(props.isActive)

    const close = () =>{
        setIsActive(!isActive)
    }

    return(
        <ul className={!isActive ? "dropdownCard isActive" : "desabilit"}>
            <li>
                <Link to="EditUser">
                    Editar Usuario
                    <GrEdit/>
                </Link>
            </li>
            {/* <li>
                <Link to="EditUser">
                    Editar Usuario
                    <GrEdit/>
                </Link>
            </li> */}
            <button className="button" onClick={close}>Fechar</button>
        </ul>
    )
}


export default DropDown;