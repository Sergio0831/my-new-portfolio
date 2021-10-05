import React from "react"
import useForm from "../../hooks/useForm"
import { Button } from "./Button"
import { form, formGroup, formInput, formLabel } from "./Form.module.scss"
import Modal from "./Modal"

const Form = () => {
  const {
    values,
    message,
    handleChange,
    clearForm,
    closeModal,
    isModalOpen,
    sendEmail,
  } = useForm()

  return (
    <>
      <form className={form} onSubmit={sendEmail}>
        {isModalOpen && <Modal message={message} closeModal={closeModal} />}
        <div className={formGroup}>
          <input
            type="name"
            id="name"
            className={formInput}
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="name" className={formLabel}>
            Name
          </label>
        </div>
        <div className={formGroup}>
          <input
            type="email"
            id="email"
            className={formInput}
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="email" className={formLabel}>
            Email
          </label>
        </div>
        <div className={formGroup}>
          <input
            type="text"
            id="subject"
            className={formInput}
            name="subject"
            value={values.subject}
            onChange={handleChange}
            required
          />
          <label htmlFor="subject" className={formLabel}>
            Subject
          </label>
        </div>
        <div className={formGroup}>
          <textarea
            name="message"
            id="message"
            className={formInput}
            rows="5"
            value={values.message}
            onChange={handleChange}
            required
          ></textarea>
          <label htmlFor="message" className={formLabel}>
            Message
          </label>
        </div>
        <Button type="submit" block className="mb-2" aria-label="Submit">
          Send
        </Button>
        <Button type="reset" block onClick={clearForm} aria-label="Reset">
          Clear
        </Button>
      </form>
    </>
  )
}

export default Form
