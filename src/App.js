import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import "./App.css";

// import required modules
import { Keyboard, Mousewheel, Pagination } from "swiper";
import MainPage from "./Components/MainPage";
import Feature1 from "./Components/Feature1";
import Feature2 from "./Components/Feature2";
import Feature3 from "./Components/Feature3";
import Feature4 from "./Components/Feature4";
import Feature5 from "./Components/Feature5";
import Feature6 from "./Components/Feature6";
import Feature7 from "./Components/Feature7";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        loop={true}
        spaceBetween={30}
        mousewheel={true}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <MainPage />
        </SwiperSlide>
        <SwiperSlide>
          <Feature1 />
        </SwiperSlide>
        <SwiperSlide>
          <Feature2 />
        </SwiperSlide>
        <SwiperSlide>
          <Feature3 />
        </SwiperSlide>
        <SwiperSlide>
          <Feature4 />
        </SwiperSlide>
        <SwiperSlide>
          <Feature5 />
        </SwiperSlide>
        <SwiperSlide>
          <Feature6 />
        </SwiperSlide>
        <SwiperSlide>
          <Feature7 />
        </SwiperSlide>
        <SwiperSlide>
          <Footer />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
