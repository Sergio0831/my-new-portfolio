import React from "react"
import Form from "../UIComponents/Form"
import Subtitle from "../UIComponents/Subtitle"
import Title from "../UIComponents/Title"
import { contact } from "./Contact.module.scss"

const Contact = () => {
  return (
    <section className={contact}>
      <Title title="Contact Me" />
      <Subtitle subtitle="This is how you can contact me..." />
      <Form />
    </section>
  )
}

export default Contact
