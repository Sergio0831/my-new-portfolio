import React from "react"
import "../../assets/styles/_utilities.scss"
import Subtitle from "../UIComponents/Subtitle"
import Title from "../UIComponents/Title"
import { projects, projectsGrid } from "./Projects.module.scss"
import Project from "../UIComponents/Project"
import { Link } from "gatsby"

const Projects = () => {
  return (
    <section className={`section-center ${projects}`}>
      <div className={`section-title`}>
        <Title title="My Projects" />
        <Subtitle subtitle="Check out of some my projects..." />
      </div>
      <div className={projectsGrid}>
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
      <Link to="#" className="btn btn-large">
        All Projects
      </Link>
    </section>
  )
}

export default Projects
