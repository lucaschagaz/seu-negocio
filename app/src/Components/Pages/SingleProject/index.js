import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import Button from "../../Form/button";
import Conteiner from "../../Layout/Conteiner";
import ProjectForm from "../../Project/ProjectForm";

import styles from "./SingleProject.module.css";


const SingleProject = () => {

    const { id } = useParams() 

    const [project, setProject] = useState([])



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
        })
        .catch((erro)=>{
        console.log(erro)
        })
  }

  return (
    <Fragment>
        {
        
        

        }
         <ProjectForm handleSubmit={editProject} btnText="Atualizar" dataProject={project}/>
    </Fragment>
  );
};

export default SingleProject;
