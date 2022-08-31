import { useEffect, useState, useMemo } from "react";
import {Link} from "react-router-dom";

import Conteiner from "../../Layout/Conteiner";
import Loading from "../../Layout/Loader";
import Pagination from "../../Layout/Pagination/Pagination";
import ProjectCard from "../../Project/ProjectCard"

import styles from "./Projects.module.css";

const Projects = () => {

  const [removeLoader, setRemoveLoader] = useState(false)
  const [projects, setProjects] = useState([])

  let PageSize = 6;
  
  const [currentPage, setCurrentPage] = useState(0);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return projects.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);



  useEffect(()=>{

    setTimeout(() => {

      fetch("http://localhost:4000/projects",{
        method: "GET",
        headers: {"Content-Type" : "application/json"}
      })
      .then((resp)=> resp.json())
      .then((data)=>{
        setProjects(data)
        setRemoveLoader(true)
        setCurrentPage(1)
      })
      .catch((erro)=>{
        console.log(erro)
      })

    }, 1000);

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
      {removeLoader && 
        <div  className={styles.title_conteiner}>
          <h1>Todos os projetos</h1>
          <button className={styles.button}>
            <Link to="/NewProject">
              Criar novo projeto
            </Link>
          </button>
        </div>
      }
     <Conteiner customClass="start">
        {currentTableData.map((project)=>(
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
        {!removeLoader && <Loading text="Carregando"></Loading>}
        {removeLoader && projects.length === 0 && (<h2>Não há Projetos cadastrados</h2>)}
     </Conteiner>
     {removeLoader && 
      <Pagination
        currentPage={currentPage}
        totalCount={projects.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />  
    }
  </div>
  );
};

export default Projects;
