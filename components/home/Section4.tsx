import React from "react";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { FaAngular } from "react-icons/fa";
import Image from "next/image";

function Section4() {
  return (
    <div className="dark:bg-megamind_black w-full min-h-[520px] 2xl:px-96 px-4 md:px-10 lg:px-20 xl:px-64 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10">
        <div>
          <div className="flex items-center mt-10">
            <h1 className="border-b-2  border-megamind_red w-8"></h1>
            <h1 className="ml-3  text-xl text-megamind_red">About Company</h1>
          </div>
          <h1 className="font-Red_Hat_Display text-4xl dark:text-megamind_white font-extrabold max-w-[400px]  mt-6">
            Best Digital Solutions Agency For Business
          </h1>
          <div className="ml-6 mt-8">
            <div className="flex items-center group">
              <TbDeviceDesktopAnalytics className="mr-6 h-12 w-12   dark:text-megamind_white group-hover:text-megamind_red group-hover:animate-bounce" />
              <div className="max-w-[360px]">
                <h1 className="text-2xl dark:text-megamind_red mb-2 font-Red_Hat_Display">
                  Digital Analysis
                </h1>
                <p className="text-gray-500">
                  Sit amet consectetur adipiscing doeiusmod tempor incididunt ut
                  labore et dolore magna aliqua uissum suspendisse ultrices.
                </p>
              </div>
            </div>
            <div className="flex items-center group mt-6">
              <FaAngular className="mr-6 h-12 w-12   dark:text-megamind_white group-hover:text-megamind_red group-hover:animate-bounce" />
              <div className="max-w-[360px]">
                <h1 className="text-2xl dark:text-megamind_red mb-2 font-Red_Hat_Display">
                  Web Development
                </h1>
                <p className="text-gray-500">
                  Web Development Quis autem vel eum reprehender voluptate velit
                  esse quam nihile molestiae consequatur veillum dolorem eum
                  fugiat voluptas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-10 md:mt-0">
          <div className="flex items-center ">
            <Image
              className="lg:mr-10 hidden md:block mb-14"
              src="/images/section4/dot.png"
              alt=""
              width={50}
              height={50}
            />
            <Image
              className="z-1  animate-my-bounce-2"
              src="/images/section4/1.jpg"
              alt=""
              width={400}
              height={400}
            />
          </div>
          <div className="flex items-center justify-center mt-[-50px]">
            <Image
              className="z-2   animate-my-bounce-3"
              src="/images/section4/2.jpg"
              alt=""
              width={400}
              height={400}
            />
            <Image
              className="lg:ml-10 hidden md:block mt-14"
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
