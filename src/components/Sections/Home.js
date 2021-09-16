import React from "react"
import {
  home,
  hero,
  heroText,
  heroImageContainer,
  heroImage,
  heroHeading,
  heroSubheading,
} from "./Home.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../../assets/styles/_icons.scss"
import "../../assets/styles/_utilities.scss"

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
    <section className={home} id="home">
      <div className={hero}>
        <div className={heroText}>
          <h1 className={heroHeading}>{name}</h1>
          <h2 className={heroSubheading}>{position}</h2>
          <div className="social">
            <a
              className="social-link social-link-home icon-linkedin"
              href="https://www.linkedin.com/in/ivcenko/"
              target="_blank"
              rel="noreferrer"
            >
              &nbsp;
            </a>
            <a
              className="social-link social-link-home icon-github"
              href="https://www.linkedin.com/in/ivcenko/"
              target="_blank"
              rel="noreferrer"
            >
              &nbsp;
            </a>
          </div>
        </div>
        <div className={heroImageContainer}>
          <GatsbyImage className={heroImage} image={pathToImage} alt={name} />
        </div>
      </div>
    </section>
  )
}

export default Home
