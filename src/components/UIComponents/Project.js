import React, { useEffect } from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  project,
  projectImage,
  projectOverlay,
  projectText,
  projectTitle,
  projectTech,
  underline,
} from "./Project.module.scss"

const Project = ({ projects = [] }) => {
  useEffect(() => {
    console.log(projects.tags)
  }, [projects])

  return (
    <>
      {projects.map(item => {
        const { id, name, frontImage, tags, slug } = item
        const pathToImage = getImage(frontImage)
        const tag = tags.map(tag => tag.content).join(", ")

        //console.log(newTag)
        return (
          <article key={id} className={project}>
            <Link to={`/${slug}`}>
              <GatsbyImage
                image={pathToImage}
                alt={slug}
                className={projectImage}
              />
              <div className={projectOverlay}>
                <div className={projectText}>
                  <h4 className={projectTitle}>{name}</h4>
                  <p className={projectTech}>{tag}</p>
                  <div className={underline}>&nbsp;</div>
                </div>
              </div>
            </Link>
          </article>
        )
      })}
    </>
  )
}

export default Project
