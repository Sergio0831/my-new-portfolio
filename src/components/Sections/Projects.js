import React from "react"
import Subtitle from "../UIComponents/Subtitle"
import Title from "../UIComponents/Title"
import { graphql, Link, useStaticQuery } from "gatsby"
import { sectionProjects, sectionProjectsGrid } from "./Projects.module.scss"
import "../../assets/styles/_utilities.scss"
import "../../assets/styles/_button.scss"
import Project from "../UIComponents/Project"
import { getImage } from "gatsby-plugin-image"

const query = graphql`
  query {
    projects: allMarkdownRemark(
      filter: { frontmatter: { last: { eq: true } } }
      sort: { fields: frontmatter___number, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            last
            new
            slug
            tags
            title
            imageFront {
              childImageSharp {
                gatsbyImageData(
                  blurredOptions: { width: 100 }
                  placeholder: BLURRED
                  layout: CONSTRAINED
                )
              }
            }
          }
          id
        }
      }
    }
  }
`

const Projects = () => {
  const data = useStaticQuery(query)
  const projects = data.projects.edges

  return (
    <section className={`section-center ${sectionProjects}`} id="works">
      <div className={`section-title`}>
        <Title title="My Projects" />
        <Subtitle subtitle="Check out of some my projects..." />
      </div>
      <div className={sectionProjectsGrid}>
        {projects &&
          projects.map(item => {
            const { id } = item.node
            const { title, slug, tags } = item.node.frontmatter
            const tag = tags.map(tag => tag).join(", ")
            const image = getImage(item.node.frontmatter.imageFront)
            return (
              <Project
                key={id}
                id={id}
                title={title}
                slug={slug}
                tag={tag}
                image={image}
              />
            )
          })}
      </div>

      <Link to="/projects" className="btn btn-large">
        All Projects
      </Link>
    </section>
  )
}

export default Projects
