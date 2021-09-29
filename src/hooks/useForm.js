import { useState } from "react"
import emailjs from "emailjs-com"

const useForm = () => {
  const [message, setMessage] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const sendEmail = e => {
    e.preventDefault()
    emailjs
      .sendForm(
        process.env.GATSBY_EMAILJS_SERVICE_ID,
        process.env.GATSBY_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.GATSBY_EMAILJS_USER_ID
      )
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          setValues({
            name: "",
            email: "",
            subject: "",
            message: "",
          })
          setMessage("Thank you for contacting me.")
          setIsModalOpen(true)
        }
      })
      .catch(err => {
        setIsModalOpen(true)
        setMessage("Something went wrong. Please try again.")
      })
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const clearForm = () => {
    setValues({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return {
    message,
    isModalOpen,
    setIsModalOpen,
    handleChange,
    clearForm,
    sendEmail,
    closeModal,
    values,
  }
}

export default useForm
