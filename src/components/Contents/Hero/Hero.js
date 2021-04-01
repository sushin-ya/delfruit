import React from "react";
import "./Hero.css";

import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

import image1 from "./images/image-1.jpg";
import image2 from "./images/image-2.jpg";
import image3 from "./images/image-3.jpg";
import arrow from "./images/arrow.svg";

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

export default function Hero() {
  return (
    <div className='hero'>
      <Swiper navigation loop grabCursor speed={1000} autoplay>
        <SwiperSlide>
          <div className='hero__title'>Enjoy Rich</div>
          <img src={image1} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <div className='hero__title'>Fantastic</div>
          <img src={image2} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <div className='hero__title'>Experience</div>
          <img src={image3} alt='' />
        </SwiperSlide>
        <div className='hero__footer'>
          <img className='hero__downarrow' src={arrow} alt='' />
          <span className='hero__scrolltext'>scroll</span>
        </div>
      </Swiper>
    </div>
  );
}
