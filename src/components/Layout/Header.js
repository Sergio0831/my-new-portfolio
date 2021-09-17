import { Link } from "gatsby"
import React from "react"
import { MenuProvider } from "../../context/MenuContext"
import Logo from "../Header/Logo"
import Navigation from "../Header/Navigation"
import { header } from "./Header.module.scss"
import { useLocation } from "@reach/router"

const Header = () => {
  const location = useLocation()

  return (
    <header className={header}>
      <Link to="/">
        <Logo />
      </Link>
      {location.pathname === "/" && (
        <MenuProvider>
          <Navigation />
        </MenuProvider>
      )}
    </header>
  )
}

export default Header
