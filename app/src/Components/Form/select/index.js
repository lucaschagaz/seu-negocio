
import styles from "./Select.module.css"

function Select({name, text, value, options, handleOnChange}){


    return(
        <div className={styles.select_Conteiner}>
            <label htmlFor={name}>{text}:</label>
            <select 
             name={name}
             id={name}
             value={value}
             onChange={handleOnChange}             
            >
                <option>Selecione uma opção</option>
                    {options.map( option => (
                        <option value={option.id} key={option.id}>
                            {option.name}
                        </option>
                    ))}
            </select>
        </div>
    )
}



export default Select;