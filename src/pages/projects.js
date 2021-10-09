import React from "react"
import loadable from "@loadable/component"
import Layout from "../components/Layout/Layout"
import "../assets/styles/_utilities.scss"
import Title from "../components/UIComponents/Title"
import Subtitle from "../components/UIComponents/Subtitle"
import Seo from "../components/SEO/SEO"
const AllProjects = loadable(() =>
  import("../components/UIComponents/AllProjects")
)

const ProjectsPage = () => {
  return (
    <Layout>
      <Seo title="Projects" />
      <main className="pt">
        <div className="section-title">
          <Title title="This is My Works" />
          <Subtitle subtitle="Take a look around and explore all works" />
        </div>
        <AllProjects />
      </main>
    </Layout>
  )
}

export default ProjectsPage
