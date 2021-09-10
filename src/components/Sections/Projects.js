import React from "react"
import "../../assets/styles/_utilities.scss"
import Subtitle from "../UIComponents/Subtitle"
import Title from "../UIComponents/Title"
import { projects } from "./Projects.module.scss"

const Projects = () => {
  return (
    <section className={projects}>
      <div className={`section-title`}>
        <Title title="My Projects" />
        <Subtitle subtitle="Check out of some my projects..." />
      </div>
    </section>
  )
}

export default Projects
