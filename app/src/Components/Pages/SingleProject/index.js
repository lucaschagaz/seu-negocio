import { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// import Button from "../../Form/button";
import Conteiner from "../../Layout/Conteiner";
import ProjectForm from "../../Project/ProjectForm";

import styles from "./SingleProject.module.css";


const SingleProject = () => {

    const { id } = useParams() 
    const navigate = useNavigate()

    const [project, setProject] = useState([])
    const [showForm, setShowForm] = useState(false)


    useEffect(()=>{

        fetch(`http://localhost:4000/projects/${id}`,{
            method: "GET",
            headers: {"Content-Type" : "application/json"}
        })
        .then((resp)=> resp.json())
        .then((data)=>{
            setProject(data)
        })
        .catch((erro)=>{
            console.log(erro)
        })

    },[id])

    const editProject = (project) =>{
   
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

    const toogleForm = () =>{
        setShowForm(!showForm)
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
            </div>
        ) : (<p>Não há Projetos</p>)
        }
    </Fragment>
  );
};

export default SingleProject;
