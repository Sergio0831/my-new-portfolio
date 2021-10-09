import React from "react"
import loadable from "@loadable/component"
import Title from "../UIComponents/Title"
import "../../assets/styles/_utilities.scss"
import { skills } from "./Skills.module.scss"
const Carousel = loadable(() => import("../UIComponents/Carousel"))

const Skills = () => {
  return (
    <section className={skills} id="skills">
      <div className={`section-title`}>
        <Title title="My Skills" />
      </div>
      <div className={`section-center`}>
        <Carousel />
      </div>
    </section>
  )
}

export default Skills
