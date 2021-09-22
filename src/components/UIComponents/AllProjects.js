import React from "react"
import Project from "./Project"
import FilterButtons from "../UIComponents/FilterButtons"
import { projectsGrid } from "./AllProjects.module.scss"
import "../../assets/styles/_utilities.scss"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            demo
            description
            github
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

const AllProjects = () => {
  const data = useStaticQuery(query)
  const projects = data.projects.edges

  return (
    <>
      <FilterButtons projects={projects} />
      <section className={`section-center ${projectsGrid}`}>
        <Project projects={projects} />
      </section>
    </>
  )
}

export default AllProjects
