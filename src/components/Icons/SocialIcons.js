import React from "react"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import { socialIcon, socialIconLink } from "./SocialIcons.module.scss"

const SocialIcons = () => {
  return (
    <>
      <a
        className={socialIconLink}
        href="https://www.linkedin.com/in/ivcenko/"
        target="_blank"
        rel="noreferrer"
      >
        <IconContext.Provider value={{ className: socialIcon }}>
          <FaLinkedin />
        </IconContext.Provider>
      </a>
      <a
        className={socialIconLink}
        href="https://github.com/Sergio0831"
        target="_blank"
        rel="noreferrer"
      >
        <IconContext.Provider value={{ className: socialIcon }}>
          <FaGithubSquare />
        </IconContext.Provider>
      </a>
    </>
  )
}

export default SocialIcons
