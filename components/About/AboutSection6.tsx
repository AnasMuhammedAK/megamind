import { initAOS } from "@/utils/aos";
import React, { useEffect } from "react";
import CountUp, { useCountUp } from "react-countup";

function AboutSection6() {
  useEffect(() => {
    initAOS();
  }, []);
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <div className=" w-full 2xl:px-96 px-4 md:px-10 lg:px-20 xl:px-64 dark:bg-megamind_black">
      <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-10 ">
        <div data-aos="zoom-in-up" className=" sm:px-8 py-6">
          <p className="text-megamind_red md:text-6xl xl:text-7xl text-3xl font-bold text-center ">
            <CountUp delay={2} end={35} enableScrollSpy />k
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
            <CountUp delay={2} end={463} enableScrollSpy />
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
            <CountUp delay={2} end={25} enableScrollSpy />m
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
            <CountUp delay={2} end={358} enableScrollSpy />+
          </p>
          <p
            data-aos="fade-right"
            className="text-center dark:text-white md:text-lg text-sm mt-2"
          >
            Yearly Awards Winning
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection6;
