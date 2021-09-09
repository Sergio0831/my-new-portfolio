import clsx from "clsx"
import React from "react"
import "../../assets/styles/_typography.scss"

const Subtitle = ({ subtitle, className }) => {
  const classes = clsx(
    {
      [`subtitle`]: true,
    },
    className
  )

  return (
    <h3 className className={classes}>
      {subtitle}
    </h3>
  )
}

export default Subtitle
