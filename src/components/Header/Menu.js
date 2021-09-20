import React, { useContext } from "react"
import clsx from "clsx"
import Nav from "./Nav"
import { MenuContext } from "../../context/MenuContext"
import { menuBg, showMenu } from "./Menu.module.scss"

const Menu = () => {
  const nav = useContext(MenuContext)
  const { isOpen } = nav
  const classes = clsx({
    [menuBg]: true,
    [showMenu]: isOpen,
  })

  return (
    <div>
      <div className={classes}>&nbsp;</div>
      <Nav />
    </div>
  )
}

export default Menu
