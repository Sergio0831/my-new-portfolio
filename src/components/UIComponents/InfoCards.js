import React from "react"
import cards from "../../data/info-cards"
import {
  infoCard,
  infoCardIcon,
  infoCardTitle,
  infoCardText,
} from "./InfoCards.module.scss"

const InfoCards = () => {
  return (
    <>
      {cards.map(card => {
        const { id, icon, title, text } = card
        return (
          <article key={id} className={infoCard}>
            <i className={`${infoCardIcon} ${icon}`}></i>
            <h4 className={infoCardTitle}>{title}</h4>
            <p className={infoCardText}>{text}</p>
          </article>
        )
      })}
    </>
  )
}

export default InfoCards
