import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  project,
  projectImage,
  projectOverlay,
  projectText,
  projectTitle,
  projectTech,
  projectTags,
  underline,
} from "./Project.module.scss"
import "../../assets/styles/_icons.scss"

const Project = ({ id, title, slug, tag, image }) => {
  return (
    <>
      <Link key={id} className={project} to={`/projects/${slug}`}>
        <GatsbyImage image={image} alt={slug} className={projectImage} />
        <div className={projectOverlay}>
          <div className={projectText}>
            <h4 className={projectTitle}>{title}</h4>
            <div className={projectTech}>
              <p className={projectTags}>{tag}</p>
              <i className="icon-right-arrow">&nbsp;</i>
            </div>
            <div className={underline}>&nbsp;</div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Project
