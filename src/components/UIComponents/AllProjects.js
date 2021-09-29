import React, { useEffect, useState } from "react"
import Project from "./Project"
import FilterButtons from "../UIComponents/FilterButtons"
import { projectsGrid } from "./AllProjects.module.scss"
import "../../assets/styles/_utilities.scss"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"

const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { order: ASC, fields: frontmatter___title }
    ) {
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
  const allTags = []
  const data = useStaticQuery(query)
  const [projects, setProjects] = useState(data.projects.edges)
  projects.map(project => {
    project.node.frontmatter.tags.map(tag => {
      allTags.push(tag)
    })
  })
  const newTags = ["All", ...new Set(allTags)]

  const filterProjects = button => {
    if (button === "All") {
      setProjects(projects)
      return
    }

    const newProjects = projects.filter(project =>
      project.node.frontmatter.tags.map(tag => tag === button)
    )
    setProjects(newProjects)
  }

  // const newTag = projects.filter(project =>
  //   project.node.frontmatter.tags.every(tag => tag === button)
  // )

  // console.log(newTag)

  return (
    <>
      <FilterButtons newTags={newTags} filterProjects={filterProjects} />
      <section className={`section-center ${projectsGrid}`}>
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
      </section>
    </>
  )
}

export default AllProjects
