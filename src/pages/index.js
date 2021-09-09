import React from "react"
import Layout from "../components/Layout/Layout"
import AboutSection from "../components/Sections/AboutSection"
import HomeSection from "../components/Sections/HomeSection"

export default function Home() {
  return (
    <Layout>
      <HomeSection />
      <AboutSection />
    </Layout>
  )
}
