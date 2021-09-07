import clsx from "clsx"
import React from "react"
import Nav from "./Nav"
import { menu, showMenu } from "./Menu.module.scss"

const Menu = ({ isOpen }) => {
  const classes = clsx({
    [menu]: true,
    [showMenu]: isOpen,
  })

  return (
    <div className={classes}>
      <Nav />
    </div>
  )
}

export default Menu
