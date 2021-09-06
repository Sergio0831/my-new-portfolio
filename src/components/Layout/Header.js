import { Link } from "gatsby"
import React from "react"
import Logo from "../Header/Logo"
import { header } from "./Header.module.scss"

const Header = () => {
  return (
    <header className={header}>
      <Link to="/">
        <Logo />
      </Link>
    </header>
  )
}

export default Header
