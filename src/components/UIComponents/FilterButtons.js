import React from "react"
import { Button } from "./Button"
import { filterButtons } from "./FilterButtons.module.scss"

const FilterButtons = () => {
  const buttons = [
    { title: "ALL" },
    { title: "SASS" },
    { title: "JavaScript" },
    { title: "React" },
    { title: "Gatsby" },
    { title: "WordPress" },
  ]

  return (
    <div className={filterButtons}>
      {buttons.map(button => {
        return (
          <Button key={button.title} small>
            {button.title}
          </Button>
        )
      })}
    </div>
  )
}

export default FilterButtons
