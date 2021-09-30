import React from "react"
import { error, errorTitle, errorIcon } from "./Error.module.scss"
import "../../assets/styles/_utilities.scss"
import "../../assets/styles/_icons.scss"

const Error = () => {
  return (
    <main className={error}>
      <section className="section-center">
        <h1 className={errorTitle}>
          4<span>0</span>4
        </h1>
        <i className={`icon-exclamation-circle-solid ${errorIcon}`}>&nbsp;</i>
      </section>
    </main>
  )
}

export default Error
