import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

// import Button from "../../Form/button";

import Conteiner from "../../Layout/Conteiner";
import ProjectCard from "../../Project/ProjectCard"

import styles from "./Products.module.css";


const Products = (props) => {

  const [projects, setProjects] = useState([])

  useEffect(()=>{

    fetch("http://localhost:4000/projects",{
      method: "GET",
      headers: {"Content-Type" : "application/json"}
    })
    .then((resp)=> resp.json())
    .then((data)=>{
      setProjects(data)
    })
    .catch((erro)=>{
      console.log(erro)
    })

  },[])

  const handleOnRemove = (id) =>{
   
    fetch(`http://localhost:4000/projects/${id}`,{
      method: "DELETE",
      headers: {"Content-Type" : "application/json"}
    })
    .then((resp)=> resp.json())
    .then(()=>{
      setProjects(projects.filter((item) => (item.id !== id)
      ))
    })
    .catch((erro)=>{
      console.log(erro)
    })
  }

  return (
    <div className={styles.projects_conteiner}>
      <div  className={styles.title_conteiner}>
        <h1>Todos os projetos</h1>
        <button className={styles.button}>
        <Link to="/NewProject">
          Criar novo projeto
        </Link>
        </button>
      </div>
     <Conteiner customClass="start">
        {projects.map((project)=>(
          <ProjectCard
          name={project.name}
          bugdet={project.bugdet}
          category={project.category}
          id={project.id}
          key={project.id}          
          handleRemove={handleOnRemove}
          ></ProjectCard>
        ))
        }
     </Conteiner>
  </div>
  );
};

export default Products;
