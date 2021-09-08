import React from "react"
import { homeSection } from "./HomeSection.module.scss"
import { hero, heroText, heroImage } from "./HomeSection.module.scss"

const HomeSection = () => {
  return (
    <section className={homeSection}>
      <div className={hero}>
        <div className={heroText}></div>
        <div className={heroImage}></div>
      </div>
    </section>
  )
}

export default HomeSection
