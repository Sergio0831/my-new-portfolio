import React from "react"

import Subtitle from "../UIComponents/Subtitle"
import Title from "../UIComponents/Title"
import { Link } from "gatsby"
import AllProjects from "../UIComponents/AllProjects"
import { projects } from "./Projects.module.scss"
import "../../assets/styles/_utilities.scss"
import "../../assets/styles/_button.scss"

const Projects = () => {
  return (
    <section className={`section-center ${projects}`} id="works">
      <div className={`section-title`}>
        <Title title="My Projects" />
        <Subtitle subtitle="Check out of some my projects..." />
      </div>
      <AllProjects />
      <Link to="/projects" className="btn btn-large">
        All Projects
      </Link>
    </section>
  )
}

export default Projects
