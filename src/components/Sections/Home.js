import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "react-scroll"
import MyResume from "../../assets/images/SergejsIvcenkoResume.pdf"
import {
  home,
  hero,
  heroText,
  heroLinks,
  heroImage,
  heroHeading,
  heroSubheading,
} from "./Home.module.scss"
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
          <div className={heroLinks}>
            <Link
              className="btn btn-medium"
              smooth={true}
              duration={500}
              spy={true}
              to="contact"
            >
              Contact Me
            </Link>
            <a className="btn btn-medium btn-outline" href={MyResume} download>
              {" "}
              Resume
              <i className="icon-file-download-solid"></i>
            </a>
          </div>
        </div>
        <GatsbyImage className={heroImage} image={pathToImage} alt={name} />
      </div>
    </section>
  )
}

export default Home
