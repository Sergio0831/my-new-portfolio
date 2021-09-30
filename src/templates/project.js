import { graphql, Link } from "gatsby"
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout/Layout"
import Title from "../components/UIComponents/Title"
import {
  project,
  back,
  projectContent,
  projectDescription,
  projectLinks,
} from "./project.module.scss"
import "../assets/styles/_utilities.scss"
import "../assets/styles/_icons.scss"

const Project = ({ data }) => {
  const singleProject = data.markdownRemark
  const { title, demo, description, github, imageSingleProject } =
    singleProject.frontmatter
  const pathToImage = getImage(imageSingleProject)
  return (
    <Layout>
      <section className={`${project} section-center`}>
        <Link className={`${back} icon-right-arrow`} to="/projects/" />
        <Title title={title} />
        <div className={projectContent}>
          <h4 className={projectDescription}>{description}</h4>
          <div className={projectLinks}>
            <Link
              to={github}
              rel="noreferrer noopener"
              target="_blank"
              className="icon-githubroud"
            >
              Source
            </Link>
            <Link to={demo} rel="noreferrer noopener" target="_blank">
              Visit demo
              <i className="icon-arrow-out">&nbsp;</i>
            </Link>
          </div>
        </div>
        <GatsbyImage image={pathToImage} alt={title} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetProjectBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        demo
        description
        github
        new
        slug
        title
        imageSingleProject {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
          }
        }
      }
      id
    }
  }
`

export default Project
