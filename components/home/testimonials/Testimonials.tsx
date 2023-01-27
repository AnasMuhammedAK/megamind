import React, { useEffect } from "react";
import { initAOS } from "@/utils/aos";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

function Testimonials() {
  useEffect(() => {
    initAOS();
  }, []);
  return (
    <>
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
        }}
        className="mySwiper max-w-[400px]"
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
          pagination={{
            clickable: true,
          }}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide className="mb-16 ">
            <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide className="mb-16 ">
            <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide className="mb-16 ">
            <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide className="mb-16 ">
            <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide className="mb-16 ">
            <TestimonialCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Testimonials;
