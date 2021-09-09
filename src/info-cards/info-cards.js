import React from "react"
import Code from "../components/Icons/Code"
import Diamond from "../components/Icons/Diamond"
import Stats from "../components/Icons/Stats"

const infoCards = [
  {
    id: 1,
    icon: <Code className="card-icon" />,
    title: "Web Development",
    text: "Write well designed, testable, efficient code by using best software development practices",
  },
  {
    id: 2,
    icon: <Diamond className="card-icon" />,
    title: "Web Design",
    text: "Create website layout/user interface by using HTML/CSS best practices",
  },
  {
    id: 3,
    icon: <Stats className="card-icon" />,
    title: "SEO",
    text: "Website optimization, increase speed and keyword research. Creating campaigns and using Facebook Ads and Google Ads",
  },
]

export default infoCards
