import React from "react"
import { footer, footerCopy } from "./Footer.module.scss"

const Footer = () => {
  const date = new Date().getFullYear()

  return (
    <footer className={footer}>
      <div className="social">
        <a
          className="social-link social-link-footer icon-linkedin"
          href="https://www.linkedin.com/in/ivcenko/"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;
        </a>
        <a
          className="social-link social-link-footer icon-github"
          href="https://github.com/Sergio0831"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;
        </a>
      </div>
      <p className={footerCopy}>
        &copy; {date}, Designed & Coded by Sergejs Ivcenko
      </p>
    </footer>
  )
}

export default Footer
