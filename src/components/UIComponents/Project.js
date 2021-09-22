import React, { useEffect } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
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
    console.log(projects)
  }, [projects])
  return (
    <>
      {projects &&
        projects.map(item => {
          const { id } = item.node

          const { title, slug, tags } = item.node.frontmatter
          console.log(title)
          const pahToImage = getImage(item.node.frontmatter.imageFront)
          return (
            <Link key={id} className={project} to={`/${slug}`}>
              <StaticImage
                //image={pahToImage}
                alt={slug}
                className={projectImage}
                src="../../assets/images/front/book.png"
                placeholder="tracedSVG"
                layout="constrained"
              />
              <div className={projectOverlay}>
                <div className={projectText}>
                  <h4 className={projectTitle}>{title}</h4>
                  <p className={projectTech}>tags</p>
                  <div className={underline}>&nbsp;</div>
                </div>
              </div>
            </Link>
          )
        })}
    </>
  )
}

export default Project
