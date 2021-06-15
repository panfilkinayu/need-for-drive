import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import freePark from "../assets/s1-freepark.jpg";
import inSur from "../assets/s2-insurance.jpg";
import fuel from "../assets/s3-fuel.jpg";
import service from "../assets/s4-service.jpg";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./Slider.css";


// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);


export default function App() {

  return (
    <>
    <Swiper 
    spaceBetween={30} 
    loop={true}
    centeredSlides={true} 
    autoplay={{
        "delay": 2500,
        "disableOnInteraction": false
    }} 
    pagination={{
        "clickable": true
    }} 
    navigation={true} 
    className="mySwiper">

    <SwiperSlide style={{ backgroundImage: `url(${freePark})` }}>
        <div className="inner">
            <h2>Бесплатная парковка</h2>
            <p>Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.</p>
            <button className="button_freepark">Подробнее</button>
        </div>
    </SwiperSlide>
    <SwiperSlide style={{ backgroundImage: `url(${inSur})` }}>
        <div className="inner">
        <h2>Страховка</h2>
        <p>Полная страховка страховка автомобиля</p>
        <button className="button_insur">Подробнее</button>
        </div>
        
    </SwiperSlide>
    <SwiperSlide style={{ backgroundImage: `url(${fuel})` }}>
        <div className="inner">
        <h2>Бензин</h2>
        <p>Полный бак на любой заправке города за наш счёт</p>
        <button className="button_fuel">Подробнее</button>
        </div>
        
    </SwiperSlide>
    <SwiperSlide style={{ backgroundImage: `url(${service})` }}>
        <div className="inner">
        <h2>Обслуживание</h2>
        <p>Автомобиль проходит еженедельное ТО</p>
        <button className="button_service">Подробнее</button>
        </div>
    </SwiperSlide> 
    </Swiper>
    </>
  )
}