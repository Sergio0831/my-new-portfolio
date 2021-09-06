import React from "react"
import SocialIcons from "../Icons/SocialIcons"
import { footer, footerIcons, footerCopy } from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={footer}>
      <div className={footerIcons}>
        <SocialIcons />
      </div>
      <p className={footerCopy}>
        &copy; 2021, Designed & Coded by Sergejs Ivcenko
      </p>
    </footer>
  )
}

export default Footer
