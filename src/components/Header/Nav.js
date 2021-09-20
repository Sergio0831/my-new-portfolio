import clsx from "clsx"
import { Link } from "react-scroll"
import React, { useContext } from "react"
import links from "../../data/nav-links"
import {
  nav,
  navList,
  navItem,
  navItemIn,
  navLink,
  navLinkActive,
  showNav,
} from "./Nav.module.scss"
import { MenuContext } from "../../context/MenuContext"

const Nav = () => {
  const menu = useContext(MenuContext)
  const { onCloseMenu, isOpen } = menu
  const navItemClasses = clsx({
    [navItem]: true,
    [navItemIn]: isOpen,
  })

  const navClasses = clsx({
    [nav]: true,
    [showNav]: isOpen,
  })

  return (
    <nav className={navClasses}>
      <ul className={navList}>
        {links.map(item => {
          const { link } = item
          return (
            <li className={navItemClasses} key={link}>
              <Link
                className={navLink}
                activeClass={navLinkActive}
                onClick={onCloseMenu}
                smooth={true}
                duration={500}
                spy={true}
                to={link}
              >
                {link}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
