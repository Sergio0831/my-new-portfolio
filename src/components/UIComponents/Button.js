import clsx from "clsx"
import React from "react"
import { btn, btnDefault, btnOutline } from "./Button.module.scss"

const Button = ({ type = "button", children, outline }) => {
  const classes = clsx({
    [btn]: true,
    [btnDefault]: !outline,
    [btnOutline]: outline,
  })

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  )
}

export default Button
