import React from "react"
import clsx from "clsx"
import "../../assets/styles/_typography.scss"

const Subtitle = ({ subtitle }) => {
  const classes = clsx({
    "subtitle-styled": true,
  })

  return <h3 className={classes}>{subtitle}</h3>
}

export default Subtitle
