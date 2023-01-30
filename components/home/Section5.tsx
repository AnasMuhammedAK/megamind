import { initAOS } from "@/utils/aos";
import AboutSection6 from "components/About/AboutSection6";
import React, { useEffect } from "react";

function Section5() {
  useEffect(() => {
    initAOS();
  }, []);
  return (
    <div className=" py-16 dark:bg-megamind_black lg:mt-[-80px] ">
      <div
        data-aos="zoom-in-up"
        className=" hidden xl:block text-8xl 2xl:text-[160px] dark:text-megamind_white/5 text-center font-extrabold text-gray-200 z-[-10] px-4 "
      >
        Company Statistics
      </div>
      <div>
        <AboutSection6 />
        {/* <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-10 ">
          <div data-aos="zoom-in-up" className=" sm:px-8 py-6">
            <p className="text-megamind_red md:text-6xl xl:text-7xl text-3xl font-bold text-center ">
              35k
            </p>
            <p
              data-aos="fade-right"
              className="text-center dark:text-white md:text-lg text-sm mt-2"
            >
              Successfully Project Done
            </p>
          </div>
          <div data-aos="zoom-in-up" className="sm:px-8 py-6 ">
            <p className="text-megamind_red md:text-6xl xl:text-7xl text-3xl  font-bold text-center">
              463
            </p>
            <p
              data-aos="fade-right"
              className="text-center dark:text-white md:text-lg text-sm mt-2"
            >
              Saticfied Global Clients
            </p>
          </div>
          <div data-aos="zoom-in-up" className="sm:px-8 py-6 ">
            <p className="text-megamind_red md:text-6xl xl:text-7xl text-3xl  font-bold text-center">
              25m
            </p>
            <p
              data-aos="fade-right"
              className="text-center dark:text-white md:text-lg text-sm mt-2"
            >
              3,280 avg Rating
            </p>
          </div>
          <div data-aos="zoom-in-up" className=" sm:px-8 py-6">
            <p className="text-megamind_red md:text-6xl xl:text-7xl text-3xl  font-bold text-center">
              358+
            </p>
            <p
              data-aos="fade-right"
              className="text-center dark:text-white md:text-lg text-sm mt-2"
            >
              Yearly Awards Winning
            </p>
          </div>
        </div>
       */}
      </div>
    </div>
  );
}

export default Section5;
