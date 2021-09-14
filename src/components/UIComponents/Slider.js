import React from "react"
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { skillContainer, skillTitle } from "./Slider.module.scss"
import "../../assets/styles/_swiper.scss"
import "../../assets/styles/_icons.scss"
import "swiper/scss"

import { slides } from "../../data/slides"

const Slider = () => {
  return (
    <div className="swiper-container">
      <Swiper
        className="swiper"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
        }}
        slidesPerView={7}
        speed={3000}
        loop={true}
        slidesPerGroup={5}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          renderBullet: () => {
            return '<span class="swiper-pagination-bullet"></span>'
          },
        }}
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.title}>
            <div className={skillContainer}>
              <img src={slide.image} alt={slide.title} />
              <p className={skillTitle}>{slide.title}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
      <button
        type="button"
        className="swiper-button swiper-button-prev icon-chevron-down"
      ></button>
      <button
        type="button"
        className="swiper-button swiper-button-next icon-chevron-down"
      ></button>
    </div>
  )
}

export default Slider
