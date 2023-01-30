import { initAOS } from "@/utils/aos";
import Image from "next/image";
import React, { useEffect } from "react";
import LinearWithValueLabel from "./LinearProgressWithLabel";

function AboutSection1() {
  useEffect(() => {
    initAOS();
  }, []);
  return (
    <div className="dark:bg-megamind_black w-full min-h-[520px] 2xl:px-96 px-4 md:px-10 lg:px-20 xl:px-64 pb-16 pt-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-20 ">
        <div className="relative">
          <Image
            src={"/images/about/section1/trusted.jpg"}
            alt=""
            width={500}
            height={500}
            className="lg:rounded-md rounded-t-md"
          />
          <Image
            src={"/images/about/section1/trusted-2.jpg"}
            alt=""
            width={500}
            height={500}
            className="lg:rounded-md lg:ml-20 lg:mt-[-80px] rounded-b-md"
          />
          <div className="rounded-full h-36 w-36 bg-megamind_red flex items-center justify-center p-3 absolute z-2 bottom-36 lg:right-0 right-[30%] hover:translate-x-[-30px] hover:translate-y-[-30px] transition-all duration-1000">
            <div className="text-megamind_white w-full h-full border rounded-full text-sm flex items-center text-center border-dashed">
              25+ Years Experience
            </div>
          </div>
        </div>
        <div>
          <div data-aos="zoom-in-up" className="flex items-center mt-10">
            <h1 className="border-b-2  border-megamind_red w-8"></h1>
            <h1 className="ml-3  text-xl text-megamind_red">
              Please Get To Know Us
            </h1>
          </div>
          <h1
            data-aos="zoom-in-up"
            className="font-Red_Hat_Display text-4xl dark:text-megamind_white font-extrabold md:max-w-[500px]  mt-6"
          >
            WE ARE
            <span className="text-megamind_red font-semibold px-2">
              TRUSTED
            </span>
            BY FIRST & BEST IN THE WORLD.
          </h1>
          <p
            data-aos="zoom-in-up"
            className="text-megamind_red/80 mt-8 mb-6 text-base leading-7"
          >
            Pnteger vitae pretium nunc. Aliquam rutrum lectus vel est pulvinar,
            in scelerisque purus faucibus fusce varius lacinia.
          </p>
          <p
            data-aos="zoom-in-up"
            className="text-gray-500 mb-6 text-sm leading-7"
          >
            Phasellus dignissim arcu sit amet augue mattis, eget rutrum ex
            finibus. Morbi blandit luctus nisi, id ornare sem blandit sed. In
            sed luctus dolor. Integer vitae pretium nunc. Aliquam rutrum lectus
            vel est pulvinar in scelerisque purus.
          </p>
          <h1
            data-aos="zoom-in-up"
            className="text-xl font-semibold font-Red_Hat_Display dark:text-megamind_white mb-2"
          >
            Digital Analysis
          </h1>
          <div data-aos="zoom-in-up">
            <LinearWithValueLabel value={78} />
          </div>
          <p
            data-aos="zoom-in-up"
            className="text-gray-500 mb-6 text-sm leading-7 mt-6"
          >
            Hasellus dignissim arcu sit amet augue mattis, eget rutrum ex
            finibus. Morbi blandit luctus nisi, id ornare sem blandit sed.
          </p>
          <div data-aos="zoom-in-up" className="h-24 mt-6 grid grid-cols-4">
            <div className="flex justify-start items-center">
              <Image
                src={"/images/user.jpeg"}
                alt=""
                width={70}
                height={70}
                className="rounded-full"
              />
            </div>
            <div className="col-span-3 flex flex-col justify-center items-start">
              <h1 className="text-lg font-semibold font-Red_Hat_Display dark:text-megamind_white">
                Randy K. Yazzie
              </h1>
              <h3 className="text-megamind_red text-sm">CEO & Founder</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection1;
