import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import {
  project,
  projectImage,
  projectOverlay,
  projectText,
  projectTitle,
  projectTech,
  underline,
} from "./Project.module.scss"

const Project = () => {
  return (
    <article className={project}>
      <a href="https://my-house.netlify.app/" target="_blank" rel="noreferrer">
        <StaticImage
          src="../../assets/images/todo.png"
          alt="project"
          className={projectImage}
          placeholder="blurred"
          layout="constrained"
          quality={100}
          maxWidth={1000}
        />
        <div className={projectOverlay}>
          <div className={projectText}>
            <h4 className={projectTitle}>Newsletter Form</h4>
            <p className={projectTech}>React, PHP</p>
            <div className={underline}>&nbsp;</div>
          </div>
        </div>
      </a>
    </article>
  )
}

export default Project
