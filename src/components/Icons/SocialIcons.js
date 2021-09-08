import clsx from "clsx"
import React from "react"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import {
  socialIcon,
  socialIconLink,
  homeHover,
  footerHover,
} from "./SocialIcons.module.scss"

const SocialIcons = ({ home, footer }) => {
  const classes = clsx({
    [socialIcon]: true,
    [homeHover]: home,
    [footerHover]: footer,
  })

  return (
    <>
      <a
        className={socialIconLink}
        href="https://www.linkedin.com/in/ivcenko/"
        target="_blank"
        rel="noreferrer"
      >
        <IconContext.Provider value={{ className: classes }}>
          <FaLinkedin />
        </IconContext.Provider>
      </a>
      <a
        className={socialIconLink}
        href="https://github.com/Sergio0831"
        target="_blank"
        rel="noreferrer"
      >
        <IconContext.Provider value={{ className: classes }}>
          <FaGithubSquare />
        </IconContext.Provider>
      </a>
    </>
  )
}

export default SocialIcons
