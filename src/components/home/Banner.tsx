"use client";

import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (_: unknown, time: number, progress: number) => {
    if (progressCircle.current) {
      (progressCircle.current as HTMLElement).style.setProperty(
        "--progress",
        `${1 - progress}`
      );
    }
    if (progressContent.current) {
      (progressContent.current as HTMLElement).textContent = `${Math.ceil(
        time / 1000
      )}s`;
    }
  };

  const banners: string[] = [
    "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBdYcT2S3jmJNEYmDGfYVlD-DJ7KBYnshcwg&s",
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <Image
              src={banner}
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Banner;
