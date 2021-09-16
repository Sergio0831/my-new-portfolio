import { Link } from "gatsby"
import React from "react"
import { MenuProvider } from "../../context/MenuContext"
import Logo from "../Header/Logo"
import Navigation from "../Header/Navigation"
import { header } from "./Header.module.scss"

const Header = () => {
  return (
    <header className={header}>
      <Link to="/">
        <Logo />
      </Link>
      <MenuProvider>
        <Navigation />
      </MenuProvider>
    </header>
  )
}

export default Header
