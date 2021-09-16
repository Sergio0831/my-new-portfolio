import React from "react"
import { Button } from "./Button"
import { form, formGroup, formInput, formLabel } from "./Form.module.scss"

const Form = () => {
  return (
    <form className={form}>
      <div className={formGroup}>
        <input type="name" id="name" class={formInput} name="name" required />
        <label htmlFor="name" className={formLabel}>
          Name
        </label>
      </div>
      <div className={formGroup}>
        <input
          type="email"
          id="email"
          class={formInput}
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
          placeholder="Email"
        />
        <label htmlFor="email" className={formLabel}>
          Email
        </label>
      </div>
      <div className={formGroup}>
        <input
          type="text"
          id="subject"
          class={formInput}
          name="subject"
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
          class={formInput}
          rows="5"
          required
        ></textarea>
        <label htmlFor="message" className={formLabel}>
          Message
        </label>
      </div>
      <Button type="submit" block className="mb-2">
        Send
      </Button>
      <Button type="reset" block>
        Clear
      </Button>
    </form>
  )
}

export default Form
