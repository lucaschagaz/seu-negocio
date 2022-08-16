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
      console.log(projects)
    })
    .catch((erro)=>{
      console.log(erro)
    })

  },[])

  return (
    <div className={styles.navBar}>
      <div>
      <h1>Todos os projetos</h1>
      <Link to="/NewProject">
        <button>Criar novo projeto</button>
      </Link>
      </div>
     <Conteiner customClass="start">
        {projects.map((project)=>(
          <ProjectCard
          name={project.name}
          bugdet={project.bugdet}
          category={project.category}
          ></ProjectCard>
        ))
        }
     </Conteiner>
 </div>
  );
};

export default Products;
