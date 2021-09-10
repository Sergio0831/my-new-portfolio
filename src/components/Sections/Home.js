import React from "react"

import {
  home,
  hero,
  heroText,
  heroImage,
  heroHeading,
  heroSubheading,
} from "./Home.module.scss"
import SocialIcons from "../Icons/SocialIcons"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const query = graphql`
  query {
    contentfulAboutMe {
      name
      position
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

const Home = () => {
  const {
    contentfulAboutMe: { name, position, image },
  } = useStaticQuery(query)
  const pathToImage = getImage(image)

  return (
    <section className={home}>
      <div className={hero}>
        <div className={heroText}>
          <h1 className={heroHeading}>{name}</h1>
          <h2 className={heroSubheading}>{position}</h2>
          <SocialIcons home />
        </div>
        <GatsbyImage className={heroImage} image={pathToImage} alt={name} />
      </div>
    </section>
  )
}

export default Home
