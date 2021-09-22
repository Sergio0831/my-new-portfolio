import React from "react"
import Subtitle from "../UIComponents/Subtitle"
import Title from "../UIComponents/Title"
import { StaticImage } from "gatsby-plugin-image"
import InfoCards from "../UIComponents/InfoCards"
import { about, aboutContent, aboutBio, infoCards } from "./About.module.scss"
import "../../assets/styles/_utilities.scss"

const About = () => {
  return (
    <section className={about} id="about">
      <div className={`section-title`}>
        <Title title="About Me" />
        <Subtitle subtitle="Let me tell you who I'm." />
      </div>
      <div className="section-center">
        <div className={aboutContent}>
          <StaticImage
            src="../../assets/images/coding.svg"
            alt="coding"
            placeholder="blurred"
            layout="constrained"
          />
          <h3 className={aboutBio}>
            <span>Hi,</span> <br />
            I'm Sergejs Ivcenko a web developer based in Dublin, with good
            understanding of the latest web standards and trends. Graphic design
            experience using Photoshop and Figma. Experience developing websites
            and applications with HTML 5, CSS3, JavaScript and React. I describe
            myself as a passionate developer who loves coding and latest web
            technologies, discipline person, with good communication and
            problem-solving skills.
          </h3>
        </div>
      </div>

      <div className={`section-center ${infoCards}`}>
        <InfoCards />
      </div>
    </section>
  )
}

export default About
