import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useEffect } from "react";
import { initAOS } from "@/utils/aos";

function Section2() {
  useEffect(() => {
    initAOS();
  }, []);
  return (
    <div className=" min-h-[500px] bg-megamind_black/90 2xl:px-80 px-4 md:px-10 lg:px-20 xl:px-64 py-4 md:pt-32 relative pb-16   sm:pl-10 pt-16">
      <Image
        className="absolute xl:left-36 left-[-10px] top-10 animate-my-bounce md:block hidden"
        src="/images/section2/circle.png"
        alt=""
        width={300}
        height={300}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10">
        <div className=" max-w-[260px] sm:max-w-full flex items-center justify-center h-full relative ">
          <Image
            object-fit="cover"
            data-aos="fade-left"
            className="sm:rounded-tr-[50px] md:rounded-tr-[80px]  xl:absolute bottom-[-150px] flex items-center justify-center"
            src="/images/section2/service.png"
            width={630}
            height={400}
            alt={""}
          />
        </div>
        <div className="  ">
          <div
            data-aos="zoom-in-up"
            className="flex items-center md:mt-24 mt-10"
          >
            <h1 className="border-b-2  border-megamind_red w-8"></h1>
            <h1 className="ml-3  text-xl text-megamind_red">
              Over 20+ Clients
            </h1>
          </div>
          <h1
            data-aos="zoom-in-up"
            className="text-megamind_white text-4xl font-Red_Hat_Display font-semibold mt-4 max-w-lg"
          >
            We Created the Most Advanced Technology.
          </h1>
          <p
            data-aos="zoom-in-up"
            className="text-gray-500 py-5 max-w-lg font-red leading-7"
          >
            Sit amet consectetur adipiscing elit sed eiusmod tempors incididunt
            labore dolore magna aliqua sependse.
          </p>
          <button
            data-aos="zoom-in-up"
            className="transition-all duration-300 text-megamind_white text-lg underline hover:text-megamind_red flex items-center justify-center"
          >
            Our Services
            <BsArrowRight className="text-xl ml-3 mt-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section2;
