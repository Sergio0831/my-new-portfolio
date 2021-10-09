import React from "react"
import loadable from "@loadable/component"
import Header from "./Header"
import "normalize.css"
import "../../assets/styles/main.scss"
const Footer = loadable(() => import("./Footer"))

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
