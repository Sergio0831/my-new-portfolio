import React from "react"
import Subtitle from "../UIComponents/Subtitle"
import Title from "../UIComponents/Title"
import {
  about,
  aboutContent,
  aboutImage,
  aboutBio,
} from "./AboutSection.module.scss"
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

const AboutSection = () => {
  const {
    BIO: { bio },
  } = useStaticQuery(query)

  return (
    <section className={about}>
      <Title title="About Me" />
      <Subtitle subtitle="Let me tell you who I'm." />
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
      <InfoCards />
    </section>
  )
}

export default AboutSection
