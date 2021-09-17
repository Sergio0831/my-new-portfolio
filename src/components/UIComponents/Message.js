import React from "react"
import { message, messageTitle, messageSubtitle } from "./Message.module.scss"

const Message = ({ title, subtitle, icon }) => {
  return (
    <div className={message}>
      <i className={icon}></i>
      <h3 className={messageTitle}>{title}</h3>
      <p className={messageSubtitle}>{subtitle}</p>
    </div>
  )
}

export default Message
