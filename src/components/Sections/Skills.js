import React from "react"
import Carousel from "../UIComponents/Carousel"
import Title from "../UIComponents/Title"
import "../../assets/styles/_utilities.scss"
import { skills } from "./Skills.module.scss"

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
