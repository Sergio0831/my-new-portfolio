import React from "react"
import Project from "./Project"
import { projectsGrid } from "./AllProjects.module.scss"
import "../../assets/styles/_utilities.scss"

const AllProjects = () => {
  return (
    <section className={`section-center ${projectsGrid}`}>
      <Project />
      <Project />
      <Project />
      <Project />
    </section>
  )
}

export default AllProjects
