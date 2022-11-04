import BlockTitle from '../BlockTitle'
import React from "react";
import ProjectItem from "./ProjectItem"

import "./Project.scss"

export default props =>{

  return(
    <section className="py-5">
      <div className="py-lg-5 container mainEffect mainEffect mainEffect--secondary">
        <BlockTitle title="PROJETOS" align="center" color="#ffffff"/>
        <div className='gap-3 d-flex justify-content-center projectList mt-3 row'>
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
        </div>
      </div>
    </section>
  )
}