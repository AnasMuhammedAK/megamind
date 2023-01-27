import { initAOS } from "@/utils/aos";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsArrowRight, BsCheckLg, BsFillPlayCircleFill } from "react-icons/bs";
import VideoModal from "./modal/VideoModal";

function Section9() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    initAOS();
  }, []);
  return (
    <div className="px-4 py-16 md:px-10 lg:px-14 dark:bg-megamind_black">
      <VideoModal open={open} setOpen={setOpen} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div data-aos="zoom-in-up">
          <div className="relative">
            <Image
              src={"/images/section9/video.jpg"}
              alt=""
              width={1000}
              height={1000}
            />
            <div className=" absolute top-[-20px] left-[-20px]  flex items-center justify-center w-full h-full cursor-pointer ">
              <div
                className="w-full text-8xl group h-full relative max-h-[40px] max-w-[40px] "
                onClick={() => setOpen(true)}
              >
                <BsFillPlayCircleFill className="bg-megamind_red rounded-full dark:bg-megamind_white  text-megamind_white dark:text-megamind_red group-hover:scale-110 transition-all duration-300" />
                <BsFillPlayCircleFill className=" rounded-full  text-megamind_white dark:text-megamind_red animate-ping absolute top-0 left-0 right-0 bottom-0" />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:px-10 px-4 md:py-16">
          <div data-aos="zoom-in-up" className="flex items-center ">
            <h1 className="border-b-2  border-megamind_red w-8"></h1>
            <h1 className="ml-3  text-xl text-megamind_red">Why Choose Us</h1>
          </div>
          <h1 data-aos="zoom-in-up" className="font-Red_Hat_Display text-4xl dark:text-megamind_white font-extrabold md:max-w-[500px]  mt-5">
            We’re Professional Digital Solutions Provider
          </h1>
          <p data-aos="zoom-in-up" className="text-gray-500 py-6 lg:max-w-[550px] leading-7">
            On the other hand, we denounce with righteous indignation dislike
            men who areso beguiled and demoralized by the charms of pleasure
            moment blinded by desire that they cannot foresee.
          </p>
          <div className="space-y-5 mt-2">
            <div data-aos="zoom-in-up" className="flex items-center">
              <BsCheckLg className="text-megamind_red  font" />
              <p className="dark:text-megamind_white/80 ml-2 text-megamind_black/80">
                Digital Solutions Provider Agency
              </p>
            </div>
            <div data-aos="zoom-in-up" className="flex items-center">
              <BsCheckLg className="text-megamind_red  font" />
              <p className="dark:text-megamind_white/80 ml-2 text-megamind_black/80">
                Unicode, UTF8 & Character Sets The Ultimate Guide
              </p>
            </div>
            <div data-aos="zoom-in-up" className="flex items-center">
              <BsCheckLg className="text-megamind_red  font" />
              <p className="dark:text-megamind_white/80 ml-2 text-megamind_black/80">
                WordPress Guides For The Advanced Beginner
              </p>
            </div>
            <div data-aos="zoom-in-up" className="flex items-center">
              <BsCheckLg className="text-megamind_red  font" />
              <p className="dark:text-megamind_white/80 ml-2 text-megamind_black/80">
                Digital Clean Checklist Prepared New Year
              </p>
            </div>
          </div>
          <button data-aos="zoom-in-up"  className=" py-3 animationbutton rounded text-white flex items-center justify-center mt-10">
            Get Free Consulting <BsArrowRight className="text-xl ml-3 mt-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section9;
