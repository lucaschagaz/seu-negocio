import Input from "../../Form/input";
import Button from "../../Form/button"
import Select from "../../Form/select"
import { useEffect, useState } from "react";



function ProjectForm({ handleSubmit, btnText}){


    const [project, setProject] = useState({})
    const [category, setCategory] = useState([])

    useEffect(()=>{
        
        fetch("http://localhost:4000/categories")
        .then((resp) => resp.json())
        .then((data)=>{
            setCategory(data)
        })
        .catch((err) => console.log(err))

    },[])

    function submit(e){
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e){
        setProject({...project, [e.target.name] : e.target.value })
    }

    function handleCategory(e){
        setProject({...project,
            category:{
                id:e.target.value,
                name: e.target.options[e.target.selectedIndex].text
            }
        })
    }

    return(
        <div>
            <form onSubmit={submit}>
                <Input
                        type="text" 
                        text="Nome do projeto"
                        name="name" 
                        placeholder="Insira o nome do Projeto"
                        handlechange={handleChange}
                        value={project.name}
                    ></Input>
                    <Input
                        type="number" 
                        text="Orcamento Final"
                        name="bugdet" 
                        placeholder="Qual orçamento do Projeto" 
                        handlechange={handleChange}
                        value={project.bugdet}
                    ></Input>
                    <Select 
                        text="Selecione a categoria"
                        name="category_id"
                        options={category}
                        handleOnChange={handleCategory}
                        value={project.category ? project.category.id : ''}
                    ></Select>
                    <Button text={btnText}></Button>
            </form>
    </div>
    )


}





export default ProjectForm;