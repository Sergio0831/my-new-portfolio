import React from "react"
import "../../assets/styles/_utilities.scss"
import Slider from "../UIComponents/Slider"
import Title from "../UIComponents/Title"
import { skills } from "./Skills.module.scss"

const Skills = () => {
  return (
    <section className={skills} id="skills">
      <div className={`section-title`}>
        <Title title="My Skills" />
      </div>
      <div className={`section-center`}>
        <Slider />
      </div>
    </section>
  )
}

export default Skills
