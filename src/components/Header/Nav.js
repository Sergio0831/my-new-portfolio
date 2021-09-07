import { Link } from "gatsby"
import React from "react"
import { nav, navList, navItem, navLink } from "./Nav.module.scss"

const Nav = () => {
  return (
    <nav className={nav}>
      <ul className={navList}>
        <li className={navItem}>
          <Link to="#" className={navLink}>
            Home
          </Link>
        </li>
        <li className={navItem}>
          <Link to="#" className={navLink}>
            About
          </Link>
        </li>
        <li className={navItem}>
          <Link to="#" className={navLink}>
            Works
          </Link>
        </li>
        <li className={navItem}>
          <Link to="#" className={navLink}>
            Skills
          </Link>
        </li>
        <li className={navItem}>
          <Link to="#" className={navLink}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
