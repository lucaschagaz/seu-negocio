import { parse, v4 as uuidv4 } from "uuid" 
import { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// import Button from "../../Form/button";
import Conteiner from "../../Layout/Conteiner";
import ProjectForm from "../../Project/ProjectForm";
import ServicesForm from "../../services/servicesForm";
import ServiceCard from "../../services/ServicesCard";
import Loader from "../../Layout/Loader"

import styles from "./SingleProject.module.css";


const SingleProject = () => {

    const { id } = useParams() 
    const navigate = useNavigate()

    const [project, setProject] = useState([])
    const [services, setServices] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [showFormServices, setShowFormServices] = useState(false)

    useEffect(()=>{

        fetch(`http://localhost:4000/projects/${id}`,{
            method: "GET",
            headers: {"Content-Type" : "application/json"}
        })
        .then((resp)=> resp.json())
        .then((data)=>{
            setProject(data)
            setServices(data.services)
        })
        .catch((erro)=>{
            console.log(erro)
        })

    },[id])

    const editProject = (project) =>{

        if(project.bugdet < project.cost){
            alert("O valor dos serviços não deve ultrapassar o Budget do projeto")
            return false
        }
   
        fetch(`http://localhost:4000/projects/${project.id}`,{
        method: "PATCH",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(project)

        })
        .then((resp)=> resp.json())
        .then((data)=>{
            setProject(data)
            navigate("/Projects")
        })
        .catch((erro)=>{
        console.log(erro)
        })
    }
    const createServiçe = (project) =>{

        const lastService = project.services[project.services.length - 1]
        
        lastService.id = uuidv4()

        const lastServiceCost = lastService.cost
        const newCost = parseFloat(lastServiceCost) + parseFloat(project.cost)

        if(newCost > project.bugdet){
            alert("O valor do custo do serviço é maior que o orçameto total.")
            project.services.pop()
            return false
        }

        project.cost = newCost

        fetch(`http://localhost:4000/projects/${project.id}`,{
            method: "PATCH",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(project)
    
            })
            .then((resp)=> resp.json())
            .then((data)=>{
                setShowFormServices(false)
            })
            .catch((erro)=>{
            console.log(erro)
        })

    }

    const toogleForm = () =>{
        setShowForm(!showForm)
    }

    const toogleFormServices = () =>{
        setShowFormServices(!showFormServices)
    }

    const handleOnRemove = (id, cost ) => {

        const servicesUpdated = project.services.filter((service) => service.id !== id )
    
        const projectUpdated = project

        projectUpdated.services = servicesUpdated
        projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

        
        fetch(`http://localhost:4000/projects/${projectUpdated.id}`,{
            method: "PATCH",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(projectUpdated)
        })
        .then((resp)=> resp.json())
        .then((data) => {
            setProject(projectUpdated)
            setServices(servicesUpdated)
        })
        .catch((erro)=>{
            console.log(erro)
        })
    }

  return (
    <Fragment>
        {project.name ? (
             <div className={styles.projects_conteiner}>
                <div  className={styles.title_conteiner}>
                    <h1>{project.name}</h1>
                    <button className={styles.button} onClick={toogleForm}>
                        {!showForm ? "Editar Projeto" : "Fechar ediação"}
                    </button>
                    {!showForm ? (
                        <div className={styles.form}>
                             <p>
                                <span>Categoria :</span> {project.category.name}
                            </p>
                            <p>
                                <span>Orçamento do projeto:</span> R${project.bugdet}
                            </p>
                            <p>
                                <span>Total Ultilizado:</span> R${project.cost}
                            </p>
                        </div>
                    ) : (
                        <div className={styles.form}>
                            
                            <ProjectForm handleSubmit={editProject} btnText="Atualizar" dataProject={project}/>    
                        
                        </div>
                    )
                    }
                </div>
                <div className={styles.service_form_container}>
                    <h2>Adicione os seus Serviços</h2>
                    <button className={styles.button} onClick={toogleFormServices}>
                        {!showFormServices ? "Adicionar serviço" : "Fechar edição"}
                    </button>
                    {showFormServices && (
                    <div className={styles.form}>
                        <h2>Formulario de Serviços</h2>
                        <ServicesForm handleSubmit={createServiçe} btnText="Criar serviço" dataProject={project}/>    
                    </div>
                    )} 
                </div>
                <h2>Todos os serviços</h2>  
                <Conteiner customClass="start">
                        {services.length > 0 && 
                            services.map((service) => (
                                <ServiceCard 
                                name={service.name}
                                cost={service.cost} 
                                description={service.description}
                                key={service.id}
                                id={service.id} 
                                handleRemove={handleOnRemove}/>
                            ))  
                        }
                        {services.length === 0 && <p>Não há serviços cadastrados</p>}
                </Conteiner>
            </div>
        ) : (<Loader></Loader>)
        }
    </Fragment>
  );
}


export default SingleProject;
