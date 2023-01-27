import { initAOS } from "@/utils/aos";
import React, { useEffect } from "react";

function Section5() {
  useEffect(() => {
    initAOS();
  }, []);
  return (
    <div className=" py-16 dark:bg-megamind_black lg:mt-[-80px]">
      <div  data-aos="zoom-in-up" className=" hidden lg:block text-9xl 2xl:text-[160px] dark:text-megamind_white/5 text-center font-extrabold text-gray-200 z-[-10] px-4">
        Company Statistics
      </div>
      <div className=" w-full 2xl:px-96 px-4 md:px-10 lg:px-20 xl:px-64 ">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 ">
          <div data-aos="fade-up-right" className=" ">
            <h1 className="text-megamind_red md:text-7xl xl:text-8xl text-5xl font-bold text-center ">
              35k
            </h1>
            <h3 data-aos="fade-left" className="text-center dark:text-white text-lg mt-2">
              Successfully Project Done
            </h3>
          </div>
          <div data-aos="fade-up-right" className=" ">
            <h1 className="text-megamind_red md:text-7xl xl:text-8xl text-5xl  font-bold text-center">
              463
            </h1>
            <h3 data-aos="fade-left" className="text-center dark:text-white text-lg mt-2">
              Saticfied Global Clients
            </h3>
          </div>
          <div data-aos="fade-up-left" className=" ">
            <h1 className="text-megamind_red md:text-7xl xl:text-8xl text-5xl  font-bold text-center">
              25m
            </h1>
            <h3 data-aos="fade-right" className="text-center dark:text-white text-lg mt-2">
              3,280 avg Rating
            </h3>
          </div>
          <div data-aos="fade-up-left" className=" ">
            <h1 className="text-megamind_red md:text-7xl xl:text-8xl text-5xl  font-bold text-center">
              358+
            </h1>
            <h3 data-aos="fade-right" className="text-center dark:text-white text-lg mt-2">
              Yearly Awards Winning
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
