import React from "react"
import Layout from "../components/Layout/Layout"
import "../assets/styles/_utilities.scss"
import AllProjects from "../components/UIComponents/AllProjects"
import Title from "../components/UIComponents/Title"
import Subtitle from "../components/UIComponents/Subtitle"
import FilterButtons from "../components/UIComponents/FilterButtons"

const ProjectsPage = () => {
  return (
    <Layout>
      <main className="pt">
        <div className="section-title">
          <Title title="This is my Works" />
          <Subtitle subtitle="Take a look around and explore all works" />
        </div>
        <FilterButtons />
        <AllProjects />
      </main>
    </Layout>
  )
}

export default ProjectsPage
