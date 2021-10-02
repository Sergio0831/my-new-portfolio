import React, { useState } from "react"
import {
  dropdown,
  dropdownHeader,
  dropdownBody,
  dropdownItem,
  open,
  selected,
} from "./FilterDropdown.module.scss"
import "../../assets/styles/_icons.scss"

const FilterDropdown = ({ newTags, filterProjects }) => {
  const [isOpen, setOpen] = useState(false)
  const [items, setItem] = useState(newTags)
  const [selectedItem, setSelectedItem] = useState(null)

  const toggleDropdown = () => setOpen(prev => !prev)

  const handleItemClick = name => {
    selectedItem == name ? setSelectedItem(null) : setSelectedItem(name)
    setOpen(false)
  }

  return (
    <div className={dropdown}>
      <button type="button" className={dropdownHeader} onClick={toggleDropdown}>
        {selectedItem || items[0]}
        <i className={`icon-chevron-down ${isOpen ? open : null}`}></i>
      </button>
      <div className={`${dropdownBody} ${isOpen ? open : null}`}>
        {items.map(item => (
          <button
            key={item}
            type="button"
            name={item}
            className={`${dropdownItem} ${
              selectedItem === item ? selected : null
            }`}
            onClick={e => handleItemClick(e.target.name)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterDropdown
