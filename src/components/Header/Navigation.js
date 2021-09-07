import clsx from "clsx"
import React, { useState } from "react"
import Menu from "./Menu"
import {
  navigation,
  navigationButton,
  navigationIcon,
  showNav,
} from "./Navigation.module.scss"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

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
      <Menu isOpen={isOpen} />
    </div>
  )
}

export default Navigation
