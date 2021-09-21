import React from "react"
import Project from "./Project"
import FilterButtons from "../UIComponents/FilterButtons"
import { projectsGrid } from "./AllProjects.module.scss"
import "../../assets/styles/_utilities.scss"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query {
    allProjects: allContentfulProjects(sort: { fields: name, order: ASC }) {
      nodes {
        id
        name
        tags {
          content
        }
        last
        slug
        frontImage {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            quality: 100
          )
        }
      }
    }
  }
`

const AllProjects = () => {
  const {
    allProjects: { nodes: projects },
  } = useStaticQuery(query)

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
