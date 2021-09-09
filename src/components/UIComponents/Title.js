import clsx from "clsx"
import React from "react"
import "../../assets/styles/_typography.scss"

const Title = ({ title, className }) => {
  const classes = clsx(
    {
      [`title`]: true,
    },
    className
  )

  return (
    <h2 className className={classes}>
      {title}
    </h2>
  )
}

export default Title
