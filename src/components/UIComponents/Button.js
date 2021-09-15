import clsx from "clsx"
import React from "react"
import "../../assets/styles/_button.scss"

export const Button = ({
  type = "button",
  className,
  children,
  large,
  small,
  outline,
  block,
  round,
  ...rest
}) => {
  const classes = clsx(
    {
      ["btn"]: true,
      "btn-large": large,
      "btn-small": small,
      "btn-outline": outline,
      "btn-block": block,
      "btn-round": round,
    },
    className
  )

  return (
    <button className={classes} {...rest} type={type}>
      {children}
    </button>
  )
}
