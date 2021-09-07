import clsx from "clsx"
import { Link } from "gatsby"
import React from "react"
import {
  nav,
  navList,
  navItem,
  navItemIn,
  navLink,
  navLinkActive,
} from "./Nav.module.scss"

const Nav = ({ isOpen }) => {
  const classes = clsx({
    [navItem]: true,
    [navItemIn]: isOpen,
  })

  return (
    <nav className={nav}>
      <ul className={navList}>
        <li className={classes}>
          <Link to="#" className={`${navLink} ${navLinkActive}`}>
            Home
          </Link>
        </li>
        <li className={classes}>
          <Link to="#" className={navLink}>
            About
          </Link>
        </li>
        <li className={classes}>
          <Link to="#" className={navLink}>
            Works
          </Link>
        </li>
        <li className={classes}>
          <Link to="#" className={navLink}>
            Skills
          </Link>
        </li>
        <li className={classes}>
          <Link to="#" className={navLink}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
