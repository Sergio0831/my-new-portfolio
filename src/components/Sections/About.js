import React from "react"
import Subtitle from "../UIComponents/Subtitle"
import Title from "../UIComponents/Title"
import {
  about,
  aboutContent,
  aboutImage,
  aboutBio,
  infoCards,
} from "./About.module.scss"
import "../../assets/styles/_utilities.scss"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import InfoCards from "../UIComponents/InfoCards"

const query = graphql`
  query BIO {
    BIO: contentfulAboutMeBioTextNode {
      bio
    }
  }
`

const About = () => {
  const {
    BIO: { bio },
  } = useStaticQuery(query)

  return (
    <section className={about} id="about">
      <div className={`section-title`}>
        <Title title="About Me" />
        <Subtitle subtitle="Let me tell you who I'm." />
      </div>
      <div className={`section-center ${aboutContent}`}>
        <StaticImage
          src="../../assets/images/coding.svg"
          alt="coding"
          placeholder="blurred"
          className={aboutImage}
        />
        <h3 className={aboutBio}>
          <span>Hi,</span> <br />
          {bio}
        </h3>
      </div>
      <div className={`section-center ${infoCards}`}>
        <InfoCards />
      </div>
    </section>
  )
}

export default About
