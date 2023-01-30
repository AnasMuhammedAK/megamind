import { initAOS } from "@/utils/aos";
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
      <div className=" w-full 2xl:px-96 px-4 md:px-10 lg:px-20 xl:px-64">
  
        <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-10 ">
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
        <>
          {/* Card is full width. Use in 12 col grid for best view. */}
          {/* Card code block start */}
          {/* <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
            <div className=" px-8 py-6 flex ">
              <div className="">
                <p className="text-megamind_red md:text-6xl xl:text-7xl text-3xl font-bold text-center sm:hidden">
                  35k
                </p>
              </div>
              <div className="ml-6">
                <p className="text-megamind_red md:text-6xl xl:text-7xl text-3xl font-bold text-center hidden sm:block">
                  35k
                </p>
                <p
                  data-aos="fade-left"
                  className="text-center dark:text-white md:text-lg text-sm mt-2"
                >
                  Project Done
                </p>
              </div>
            </div>
            <div className=" px-8 py-6 flex ">
              <div className="">
                <p className="text-megamind_red md:text-6xl xl:text-7xl text-3xl font-bold text-center sm:hidden">
                  463
                </p>
              </div>
              <div className="ml-6">
                <p className="text-megamind_red md:text-6xl xl:text-7xl text-3xl font-bold text-center hidden sm:block">
                  463
                </p>
                <p
                  data-aos="fade-left"
                  className="text-center dark:text-white md:text-lg text-sm mt-2"
                >
                  Global Clients
                </p>
              </div>
            </div>
            <div className=" px-8 py-6 flex ">
              <div className="">
                <p className="text-megamind_red md:text-6xl xl:text-7xl text-3xl font-bold text-center sm:hidden">
                  25M
                </p>
              </div>
              <div className="ml-6">
                <p className="text-megamind_red md:text-6xl xl:text-7xl text-3xl font-bold text-center hidden sm:block">
                  24M
                </p>
                <p
                  data-aos="fade-left"
                  className="text-center dark:text-white md:text-lg text-sm mt-2"
                >
                  3,280 Rating
                </p>
              </div>
            </div>
            <div className=" px-8 py-6 flex  ">
              <div className="">
                <p className="text-megamind_red md:text-6xl xl:text-7xl text-3xl font-bold text-center sm:hidden">
                  358+
                </p>
              </div>
              <div className="ml-6">
                <p className="text-megamind_red md:text-6xl xl:text-7xl text-3xl font-bold text-center hidden sm:block">
                  358+
                </p>
                <p
                  data-aos="fade-left"
                  className="text-center dark:text-white md:text-lg text-sm mt-2"
                >
                  Yearly Awards
                </p>
              </div>
            </div>
          </div> */}
          {/* Card code block end */}
        </>
      </div>
    </div>
  );
}

export default Section5;
