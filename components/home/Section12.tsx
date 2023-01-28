import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

function Section12() {
  const logos = [
    "/images/clients/Client1.png",
    "/images/clients/Client2.png",
    "/images/clients/Client3.png",
    "/images/clients/Client4.png",
    "/images/clients/Client5.png",
    "/images/clients/Client6.png",
    "/images/clients/Client7.png",
    "/images/clients/Client8.png",
    "/images/clients/Client9.png",
    "/images/clients/Client10.png",
    "/images/clients/Client11.png",
    "/images/clients/Client12.png",
    "/images/clients/Client13.png",
    "/images/clients/Client14.png",
    "/images/clients/Client15.png",
    "/images/clients/Client16.png",
    "/images/clients/Client17.png",
    "/images/clients/Client18.png",
    "/images/clients/Client19.png",
    "/images/clients/Client20.png",
    "/images/clients/Client21.png",
    "/images/clients/Client22.png",
    "/images/clients/Client23.png",
    "/images/clients/Client24.png",
  ];
  return (
    <>
      <div className="bg-megamind_black/10  dark:bg-megamind_black/95">
        <div>
          <Swiper
            breakpoints={{
              640: {
                width: 640,
                slidesPerView: 3,
              },
              768: {
                width: 768,
                slidesPerView: 4,
              },
              1280: {
                width: 1280,
                slidesPerView: 5,
              },
              1536: {
                width: 1536,
                slidesPerView: 6,
              },
              1700: {
                width: 100,
                slidesPerView: 7,
              },
              1900: {
                width: 1900,
                slidesPerView: 8,
              },
              2000: {
                width: 2000,
                slidesPerView: 8,
              },
            }}
            className="mySwiper max-w-[360px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] 4xl:max-w-[1700px] 6xl:max-w-[1900px] 7xl:max-w-[2000px]"
            spaceBetween={1}
            slidesPerView={2}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {logos?.map((logo, index) => (
              <SwiperSlide
                className="flex items-center justify-center"
                key={index}
              >
                <div className="  sm:w-60 flex items-center justify-center mb-[-100px] sm:py-10">
                  <Image
                    src={logo}
                    alt="logo"
                    className="object-fit sm:h-[42px] sm:w-[170px] mr-10 "
                    width={100}
                    height={100}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Section12;
