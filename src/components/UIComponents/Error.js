import React from "react"
import Subtitle from "../UIComponents/Subtitle"
import { error, errorTitle, errorIcon } from "./Error.module.scss"
import "../../assets/styles/_utilities.scss"
import "../../assets/styles/_icons.scss"

const Error = () => {
  return (
    <main>
      <section className={error}>
        <h1 className={errorTitle}>
          4<span>0</span>4
        </h1>
        <Subtitle subtitle="Page not found" />
        <i className={`icon-exclamation-circle-solid ${errorIcon}`}></i>
      </section>
    </main>
  )
}

export default Error
