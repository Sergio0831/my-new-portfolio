import React from "react"
import Layout from "../components/Layout/Layout"
import About from "../components/Sections/About"
import Home from "../components/Sections/Home"
import Projects from "../components/Sections/Projects"

export default function HomePage() {
  return (
    <Layout>
      <Home />
      <About />
      <Projects />
    </Layout>
  )
}
