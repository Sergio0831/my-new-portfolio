import React, { useEffect } from "react"
import { modal, modalContent } from "./Modal.module.scss"

const Modal = ({ message, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal()
    }, 4000)
  })

  return (
    <div className={modal}>
      <p className={modalContent}>{message}</p>
    </div>
  )
}

export default Modal
