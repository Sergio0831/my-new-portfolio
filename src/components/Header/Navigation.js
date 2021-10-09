import React, { useContext } from "react"
import loadable from "@loadable/component"
import clsx from "clsx"
import { MenuContext } from "../../context/MenuContext"
import {
  navigation,
  navigationButton,
  navigationIcon,
  showNav,
} from "./Navigation.module.scss"
const Menu = loadable(() => import("./Menu"))

const Navigation = () => {
  const nav = useContext(MenuContext)
  const { isOpen, setIsOpen } = nav

  const classes = clsx({
    [navigationIcon]: true,
    [showNav]: isOpen,
  })

  return (
    <div className={navigation}>
      <button
        type="button"
        aria-label="Navigation"
        className={navigationButton}
        onClick={() => setIsOpen(!isOpen)}
      >
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
