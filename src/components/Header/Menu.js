import clsx from "clsx"
import React, { useContext } from "react"
import Nav from "./Nav"
import { menu, showMenu } from "./Menu.module.scss"
import { MenuContext } from "../../context/MenuContext"

const Menu = () => {
  const nav = useContext(MenuContext)
  const { isOpen } = nav
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
