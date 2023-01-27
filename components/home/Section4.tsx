import React, { useEffect } from "react";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { FaAngular } from "react-icons/fa";
import Image from "next/image";
import { initAOS } from "@/utils/aos";

function Section4() {
  useEffect(() => {
    initAOS();
  }, []);
  return (
    <div className="dark:bg-megamind_black w-full min-h-[520px] 2xl:px-96 px-4 md:px-10 lg:px-20 xl:px-64 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10">
        <div>
          <div data-aos="zoom-in-up" className="flex items-center mt-10">
            <h1 className="border-b-2  border-megamind_red w-8"></h1>
            <h1 className="ml-3  text-xl text-megamind_red">About Company</h1>
          </div>
          <h1 data-aos="zoom-in-up" className="font-Red_Hat_Display text-4xl dark:text-megamind_white font-extrabold md:max-w-[400px]  mt-6">
            Best Digital Solutions Agency For Business
          </h1>
          <div className=" mt-8 ">
            <div data-aos="fade-down-right" className="grid grid-cols-4  group sm:max-w-[460px] max-w-[260px]">
              <TbDeviceDesktopAnalytics className="mr-6 h-12 w-12 mt-6   dark:text-megamind_white group-hover:text-megamind_red group-hover:animate-bounce" />
              <div className="col-span-3">
                <h1 data-aos="zoom-in-up" className="text-2xl dark:text-megamind_red mb-2 font-Red_Hat_Display">
                  Digital Analysis
                </h1>
                <p data-aos="zoom-in-up" className="text-gray-500 md:leading-7">
                  Sit amet consectetur adipiscing doeiusmod tempor incididunt ut
                  labore et dolore magna aliqua uissum suspendisse ultrices.
                </p>
              </div>
            </div>
            <div data-aos="fade-up-left" className="grid grid-cols-4 group mt-6 group sm:max-w-[460px] max-w-[260px]">
              <FaAngular className="mr-6 h-12 w-12  mt-6  dark:text-megamind_white group-hover:text-megamind_red group-hover:animate-bounce" />
              <div className="col-span-3">
                <h1 data-aos="zoom-in-up" className="text-2xl dark:text-megamind_red mb-2 font-Red_Hat_Display">
                  Web Development
                </h1>
                <p data-aos="zoom-in-up" className="text-gray-500 md:leading-7">
                  Web Development Quis autem vel eum reprehender voluptate velit
                  esse quam nihile molestiae consequatur veillum dolorem eum
                  fugiat voluptas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-10 md:mt-0 ">
          <div className="flex items-center ">
            <Image
              className="lg:mr-10 hidden md:block mb-14 animate-my-bounce"
              src="/images/section4/dot.png"
              alt=""
              width={50}
              height={50}
            />
            <Image
              className="z-1  animate-my-bounce-2 max-w-[300px] sm:max-w-full"
              src="/images/section4/1.jpg"
              alt=""
              width={400}
              height={400}
            />
          </div>
          <div className="flex items-center justify-center mt-[-50px] xl:pl-28 ">
            <Image
              className="z-2   animate-my-bounce-3 max-w-[300px] sm:max-w-full"
              src="/images/section4/2.jpg"
              alt=""
              width={400}
              height={400}
            />
            <Image
              className="lg:ml-10 hidden md:block mt-14 animate-my-bounce"
              src="/images/section4/dot.png"
              alt=""
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
