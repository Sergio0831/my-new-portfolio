import React from "react"
import Slider from "react-slick"
import { NextArrow, PrevArrow } from "./CarouselArrows"
import { Button } from "./Button"
import { slides } from "../../data/slides"
import { slide, slideTitle } from "./Carousel.module.scss"
import "slick-carousel/slick/slick.scss"
import "../../assets/styles/_slider.scss"

const Carousel = () => {
  const settings = {
    customPaging: () => {
      return <Button aria-label="Pagination" round />
    },
    dots: true,
    lazyLoad: true,
    dotsClass: "slick-dots",
    infinite: true,
    speed: 600,
    slidesToShow: 7,
    slidesToScroll: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        },
      },
    ],
  }

  return (
    <Slider {...settings}>
      {slides.map(item => (
        <div key={item.title}>
          <div className={slide}>
            <img src={item.image} alt={item.title} />
            <p className={slideTitle}>{item.title}</p>
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default Carousel
