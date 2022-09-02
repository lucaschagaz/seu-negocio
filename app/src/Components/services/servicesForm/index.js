import {  useState } from "react";

import Input from "../../Form/input";
import Button from "../../Form/button"


function ServicesForm({ handleSubmit, btnText, dataProject}){


    const [service, setService] = useState({})

    function submit(e){
        e.preventDefault()
        dataProject.services.push(service)
        handleSubmit(dataProject)
    }

    function handleChange(e){
        setService({...service, [e.target.name] : e.target.value })
    }

    return(
        <div>
            <form onSubmit={submit}>
                    <Input
                        type="text" 
                        text="Nome do Serviço"
                        name="name" 
                        placeholder="Insira o nome do serviço"
                        handlechange={handleChange}
                    ></Input>
                    <Input
                        type="number" 
                        text="Custo do serviço"
                        name="cost" 
                        placeholder="Insira o custo do serviço" 
                        handlechange={handleChange}
                    ></Input>
                     <Input
                        type="text" 
                        text="Descrição Serviço"
                        name="description" 
                        placeholder="Insira a descrição do serviço"
                        handlechange={handleChange}
                    ></Input>
                    <Button text={btnText}></Button>
            </form>
    </div>
    )


}





export default ServicesForm;