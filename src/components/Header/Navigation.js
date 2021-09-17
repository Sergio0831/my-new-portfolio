import React, { useContext } from "react"
import clsx from "clsx"
import { MenuContext } from "../../context/MenuContext"
import Menu from "./Menu"
import {
  navigation,
  navigationButton,
  navigationIcon,
  showNav,
} from "./Navigation.module.scss"

const Navigation = () => {
  const nav = useContext(MenuContext)
  const { isOpen, setIsOpen } = nav

  const classes = clsx({
    [navigationIcon]: true,
    [showNav]: isOpen,
  })

  return (
    <div className={navigation}>
      <button className={navigationButton} onClick={() => setIsOpen(!isOpen)}>
        <span className={classes}>&nbsp;</span>
        <span className={classes}>&nbsp;</span>
        <span className={classes}>&nbsp;</span>
        &nbsp;
      </button>
      <Menu />
    </div>
  )
}

export default Navigation
