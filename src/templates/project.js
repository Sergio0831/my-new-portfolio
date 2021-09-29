import { graphql, Link } from "gatsby"
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout/Layout"
import Title from "../components/UIComponents/Title"
import { project, back } from "./project.module.scss"
import "../assets/styles/_utilities.scss"
import "../assets/styles/_icons.scss"

const Project = ({ data }) => {
  const singleProject = data.markdownRemark
  const { title, demo, description, github, tags, imageSingleProject } =
    singleProject.frontmatter
  const pathToImage = getImage(imageSingleProject)
  return (
    <Layout>
      <section className={`${project} section-center`}>
        <Link className={`${back} icon-right-arrow`} to="/projects/" />
        <Title title={title} />
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
        tags
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
