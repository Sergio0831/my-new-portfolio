import React from "react"
import { Button } from "./Button"
import { filterButtons } from "./FilterButtons.module.scss"

const FilterButtons = ({ newTags, filterProjects }) => {
  return (
    <div className={filterButtons}>
      {newTags.map((button, i) => {
        return (
          <Button key={i} small onClick={() => filterProjects(button)}>
            {button}
          </Button>
        )
      })}
    </div>
  )
}

export default FilterButtons
