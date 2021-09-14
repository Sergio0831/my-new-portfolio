import React from "react"
import { footer, footerCopy } from "./Footer.module.scss"

const Footer = () => {
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
          href="https://www.linkedin.com/in/ivcenko/"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;
        </a>
      </div>
      <p className={footerCopy}>
        &copy; 2021, Designed & Coded by Sergejs Ivcenko
      </p>
    </footer>
  )
}

export default Footer
