"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import style from "@/app/styles/swiper.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Sliding = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className={style.swiperSlide}>
        <img src="images/profile.jpg" alt="profile" className="border p-1" />
        <h1 className="mt-3">Ankit Jangir</h1>
        <p className="mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          officiis provident vitae, doloribus eaque saepe{" "}
        </p>
      </SwiperSlide>
      <SwiperSlide className={style.swiperSlide}>
        <img src="images/profile2.jpg" alt="profile" className="border p-1" />
        <h1 className="mt-3">Aman Sharma</h1>
        <p className="mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          officiis provident vitae, doloribus eaque saepe{" "}
        </p>
      </SwiperSlide>
      <SwiperSlide className={style.swiperSlide}>
        <img src="images/profile3.jpg" alt="profile" className="border p-1" />
        <h1 className="mt-3">Aditi Jangir</h1>
        <p className="mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          officiis provident vitae, doloribus eaque saepe{" "}
        </p>
      </SwiperSlide>
    </Swiper>
  );
};

export default Sliding;
