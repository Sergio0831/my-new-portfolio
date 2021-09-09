import React from "react"
import cards from "../../info-cards/info-cards"
import "../../assets/styles/_utilities.scss"
import {
  infoCards,
  infoCard,
  infoCardTitle,
  infoCardText,
} from "./InfoCards.module.scss"

const InfoCards = () => {
  return (
    <div className={`section-center ${infoCards}`}>
      {cards.map(card => {
        const { id, icon, title, text } = card
        return (
          <article key={id} className={infoCard}>
            {icon}
            <h4 className={infoCardTitle}>{title}</h4>
            <p className={infoCardText}>{text}</p>
          </article>
        )
      })}
    </div>
  )
}

export default InfoCards
