import React from "react"
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { skillContainer, skillTitle } from "./Slider.module.scss"
import "../../assets/styles/_swiper.scss"
import "../../assets/styles/_icons.scss"
import "../../assets/styles/_button.scss"
import "swiper/scss"
import { slides } from "../../data/slides"
import { Button } from "./Button"

const Slider = () => {
  return (
    <div className="swiper-container">
      <Swiper
        className="swiper"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        centeredSlides={true}
        slidesPerGroup={5}
        slidesPerView={7}
        breakpoints={{
          1440: { slidesPerView: 7, spaceBetween: 50 },
          960: { slidesPerView: 6, spaceBetween: 40, slidesPerGroup: 5 },
          720: { slidesPerView: 5, spaceBetween: 40, slidesPerGroup: 5 },
          480: { slidesPerView: 4, spaceBetween: 30, slidesPerGroup: 4 },
          320: { slidesPerView: 3, spaceBetween: 20, slidesPerGroup: 3 },
        }}
        speed={2000}
        loop={true}
        grabCursor={true}
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
      <Button
        round
        className="swiper-button swiper-button-prev icon-chevron-down"
      ></Button>
      <Button
        round
        className="swiper-button swiper-button-next icon-chevron-down"
      ></Button>
    </div>
  )
}

export default Slider
