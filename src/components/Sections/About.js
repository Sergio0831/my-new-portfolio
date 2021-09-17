import React from "react"
import Subtitle from "../UIComponents/Subtitle"
import Title from "../UIComponents/Title"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import InfoCards from "../UIComponents/InfoCards"
import { about, aboutContent, aboutBio, infoCards } from "./About.module.scss"
import "../../assets/styles/_utilities.scss"

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
      <div className="section-center">
        <div className={aboutContent}>
          <StaticImage
            src="../../assets/images/coding.svg"
            alt="coding"
            placeholder="blurred"
          />
          <h3 className={aboutBio}>
            <span>Hi,</span> <br />
            {bio}
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
