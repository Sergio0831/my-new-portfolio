import React from "react"
import { Button } from "./Button"
import { arrow, arrowNext, arrowPrev } from "./CarouselArrows.module.scss"
import "../../assets/styles/_icons.scss"
import "../../assets/styles/_button.scss"

export const NextArrow = ({ onClick }) => {
  return (
    <Button
      round
      className={`icon-chevron-down ${arrow} ${arrowNext}`}
      onClick={onClick}
    ></Button>
  )
}

export const PrevArrow = ({ onClick }) => {
  return (
    <Button
      round
      className={`icon-chevron-down ${arrow} ${arrowPrev}`}
      onClick={onClick}
    ></Button>
  )
}
