import React from "react"
import Layout from "../components/Layout/Layout"
import Home from "../components/Sections/Home"
import About from "../components/Sections/About"
import Projects from "../components/Sections/Projects"
import Skills from "../components/Sections/Skills"
import Contact from "../components/Sections/Contact"

export default function HomePage() {
  return (
    <Layout>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  )
}
