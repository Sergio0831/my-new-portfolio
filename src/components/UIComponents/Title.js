import React from "react"
import clsx from "clsx"
import "../../assets/styles/_typography.scss"

const Title = ({ title }) => {
  const classes = clsx({
    "title-styled": true,
  })

  return <h2 className={classes}>{title}</h2>
}

export default Title
