import React, { createContext, useState } from "react"

const MenuContext = createContext()

const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleCloseMenu = () => {
    setIsOpen(false)
  }

  const value = {
    onCloseMenu: handleCloseMenu,
    isOpen,
    setIsOpen,
  }

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}

export { MenuContext, MenuProvider }
