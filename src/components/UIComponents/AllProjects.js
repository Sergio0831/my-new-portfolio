import React, { useState } from "react"
import Project from "./Project"
import FilterDropdown from "../UIComponents/FilterDropdown"
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
  const tagsArray = []
  const data = useStaticQuery(query)
  const [projects] = useState(data.projects.edges)
  const [isOpen, setOpen] = useState(false)
  const [filtered, setFiltered] = useState(projects)
  const [selectedItem, setSelectedItem] = useState(null)
  projects.map(project =>
    project.node.frontmatter.tags.map(tag => tagsArray.push(tag))
  )
  const newTags = ["All", ...new Set(tagsArray)]

  const handleToggleDropdown = () => setOpen(prev => !prev)

  const handleFilterProjects = e => {
    const name = e.target.name
    if (selectedItem === name) {
      setSelectedItem(null)
    }
    if (name === "All") {
      setFiltered(projects)
      setSelectedItem(null)
      setOpen(false)
    } else {
      setSelectedItem(name)
      const newProjects = projects.filter(project =>
        project.node.frontmatter.tags.some(tag => tag === name)
      )
      setFiltered(newProjects)
      setOpen(false)
    }
  }

  const props = {
    newTags,
    selectedItem,
    isOpen,
    onToggleDropdown: handleToggleDropdown,
    onFilterProjects: handleFilterProjects,
  }

  return (
    <>
      <FilterDropdown {...props} />
      <section className={`section-center ${projectsGrid}`}>
        {filtered &&
          filtered.map(item => {
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
