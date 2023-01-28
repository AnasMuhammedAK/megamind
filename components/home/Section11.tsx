import { initAOS } from "@/utils/aos";
import React, { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Section11Card from "./cards/Section11Card";

function Section11() {
  useEffect(() => {
    initAOS();
  }, []);
  return (
    <div className="bg-megamind_black/90 w-full min-h-[520px]   py-16">
      <div className="2xl:px-96 px-4 md:px-10 lg:px-20 xl:px-64 ">
        <div
          data-aos="zoom-in-up"
          className="flex items-center xl:mt-16 w-full justify-center"
        >
          <h1 className="border-b-2  border-megamind_red w-12"></h1>
          <h1 className="mx-4  text-xl text-megamind_red">News & Blog</h1>
          <h1 className="border-b-2  border-megamind_red w-12"></h1>
        </div>
        <h1
          data-aos="zoom-in-up"
          className="font-Red_Hat_Display md:text-4xl text-3xl text-megamind_white font-extrabold text-center mt-6"
        >
          Get Every Single News & Blog
        </h1>
      </div>

      <div className="mt-20 text-megamind_white" data-aos="zoom-in-up ">
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
            1280: {
              width: 1280,
              slidesPerView: 3,
            },
          }}
          className="mySwiper w-[360px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] "
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          //   pagination={{
          //     clickable: true,
          //   }}
          modules={[Pagination, Autoplay]}
        >
          <SwiperSlide>
            <Section11Card />
          </SwiperSlide>
          <SwiperSlide>
            <Section11Card />
          </SwiperSlide>
          <SwiperSlide>
            <Section11Card />
          </SwiperSlide>
          <SwiperSlide>
            <Section11Card />
          </SwiperSlide>
          <SwiperSlide>
            <Section11Card />
          </SwiperSlide>
          <button
            data-aos="fade-right"
            className="transition-all mt-[-50px] float-right   duration-300 text-megamind_white text-lg underline hover:text-megamind_red flex items-center justify-center"
          >
            View More
            <BsArrowRight className=" text-sm ml-3 mt-1" />
          </button>
        </Swiper>
      </div>
    </div>
  );
}

export default Section11;
