import React from "react"
import Layout from "../components/Layout/Layout"
import About from "../components/Sections/About"
import Home from "../components/Sections/Home"
import Projects from "../components/Sections/Projects"
import Skills from "../components/Sections/Skills"

export default function HomePage() {
  return (
    <Layout>
      <Home />
      <About />
      <Projects />
      <Skills />
    </Layout>
  )
}
