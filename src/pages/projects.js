import React from "react"
import Layout from "../components/Layout/Layout"
import "../assets/styles/_utilities.scss"
import AllProjects from "../components/UIComponents/AllProjects"
import Title from "../components/UIComponents/Title"
import Subtitle from "../components/UIComponents/Subtitle"
import Seo from "../components/SEO/SEO"

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
