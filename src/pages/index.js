import React from "react"
import loadable from "@loadable/component"
import Layout from "../components/Layout/Layout"
import Home from "../components/Sections/Home"
import Seo from "../components/SEO/SEO"
const Projects = loadable(() => import("../components/Sections/Projects"))
const Skills = loadable(() => import("../components/Sections/Skills"))
const Contact = loadable(() => import("../components/Sections/Contact"))
const About = loadable(() => import("../components/Sections/About"))

export default function HomePage() {
  return (
    <Layout>
      <Seo title="Home" />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  )
}
