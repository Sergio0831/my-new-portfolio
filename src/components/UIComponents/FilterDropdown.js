import React from "react"
import {
  dropdown,
  dropdownHeader,
  dropdownBody,
  dropdownItem,
  open,
  selected,
} from "./FilterDropdown.module.scss"
import "../../assets/styles/_icons.scss"

const FilterDropdown = ({ ...props }) => {
  const { newTags, selectedItem, isOpen, onToggleDropdown, onFilterProjects } =
    props
  return (
    <div className={dropdown}>
      <button
        type="button"
        className={dropdownHeader}
        onClick={onToggleDropdown}
        aria-label="Dropdown"
      >
        {selectedItem || newTags[0]}
        <i className={`icon-chevron-down ${isOpen ? open : null}`}></i>
      </button>
      <div className={`${dropdownBody} ${isOpen ? open : null}`}>
        {newTags.map(item => (
          <button
            aria-label="Dropdown Item"
            key={item}
            type="button"
            name={item}
            className={`${dropdownItem} ${
              selectedItem === item ? selected : null
            }`}
            onClick={onFilterProjects}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterDropdown
