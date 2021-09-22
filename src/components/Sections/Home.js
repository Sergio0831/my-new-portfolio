import React from "react"
import { StaticImage } from "gatsby-plugin-image"
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

const Home = () => {
  return (
    <section className={home} id="home">
      <div className={hero}>
        <div className={heroText}>
          <h1 className={heroHeading}>Sergejs Ivcenko</h1>
          <h2 className={heroSubheading}>Web Developer</h2>
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
        <StaticImage
          className={heroImage}
          src="../../assets/images/myportrait.jpg"
          alt="my image"
          placeholder="tracedSVG"
          layout="constrained"
        />
      </div>
    </section>
  )
}

export default Home
