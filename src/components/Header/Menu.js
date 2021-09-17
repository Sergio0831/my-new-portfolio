import React, { useContext } from "react"
import clsx from "clsx"
import Nav from "./Nav"
import { MenuContext } from "../../context/MenuContext"
import { menu, showMenu } from "./Menu.module.scss"

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
