import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import "normalize.css"
import "../../assets/styles/main.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
