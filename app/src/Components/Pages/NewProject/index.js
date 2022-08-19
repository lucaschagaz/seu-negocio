import { useNavigate } from "react-router-dom"

import ProjectForm from "../../Project/ProjectForm"

import styles from "./NewProject.module.css"


function NewProject () {

  const navigate = useNavigate()

  const createProject = (project) =>{

    project.cost = 0
    project.services = []

    fetch("http://localhost:4000/projects",{
      method: "POST",
      headers: { "Content-Type" : "application/json"},
      body: JSON.stringify(project)
      
    }).then((resp) =>{ resp.json()})
    .then((data) =>{
      navigate("/Projects")
      console.log(data)
    }).catch((err) =>{
      console.log(err)
    })
  
  }

  return (
    <div className={styles.newProject_conteiner}>
      <h1>Criar novo projeto</h1>
      <p>Crie o seu projeto e depois adcione serviços a vontade</p>
      <ProjectForm handleSubmit={createProject} btnText="Criar"/>
    </div>
  );
}

export default NewProject ;
