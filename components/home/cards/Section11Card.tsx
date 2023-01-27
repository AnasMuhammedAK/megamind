import Image from "next/image";
import React from "react";
import { AiFillMessage } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";

function Section11Card() {
  return (
    <div className="border rounded-lg min-h-[400px] overflow-hidden hover:border-megamind_red border-megamind_white border-opacity-30 ">
      <div className="min-h-[400px] rounded-lg bg-cover bg-center w-full  hover:bg-[url(https://surielementor.com/bixoswp/wp-content/uploads/2022/05/post-update-2.jpg)] hover:scale-110 group transition-all duration-500">
        <div className=" rounded-lg group-hover:scale-95 duration-500  p-10 min-h-[400px] w-full  group-hover:bg-megamind_black/50">
          <p data-aos="zoom-in-up" className="bg-megamind_red w-32 text-center py-1 rounded-md">
            XD Design
          </p>
          <h1 data-aos="zoom-in-up" className="text-megamind_white hover:text-megamind_red mt-10 mb-6 font-semibold text-xl ">
            Writing WordPress Guides Advanced Beginner Digital Clean Check
          </h1>
          <div  className="grid grid-cols-2 gap-6 text-gray-400">
            <div data-aos="zoom-in-up" className="flex items-center space-x-2">
              <FaCalendarAlt />
              <p>Jan 27, 2023</p>
            </div>
            <div data-aos="zoom-in-up" className="flex items-center space-x-2">
              <AiFillMessage />
              <p>0 Comments</p>
            </div>
          </div>
          <hr className="my-8 border-megamind_white border-opacity-30" />
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
              <h1 className="dark:text-megamind_white text-xl font-semibold">
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

export default Section11Card;
