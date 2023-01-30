import { initAOS } from "@/utils/aos";
import Services from "./Services";
import React, { useEffect } from "react";

function AboutSection2() {
  useEffect(() => {
    initAOS();
  }, []);
  return (
    <div className="py-16 bg-megamind_black/5 dark:bg-megamind_black/95 ">
      <div
        data-aos="zoom-in-up"
        className="flex items-center w-full justify-center"
      >
        <h1 className="border-b-2  border-megamind_red w-12"></h1>
        <h1 className="mx-4  text-xl text-megamind_red">Our Services List</h1>
        <h1 className="border-b-2  border-megamind_red w-12"></h1>
      </div>
      <h1
        data-aos="zoom-in-up"
        className="font-Red_Hat_Display text-4xl dark:text-megamind_white font-extrabold text-center my-6"
      >
        THE
        <span className="text-megamind_red font-semibold px-2"> SERVICES </span>
        WE’RE OFFERING
      </h1>
      <div data-aos="zoom-in-up">
        <Services />
      </div>
    </div>
  );
}

export default AboutSection2;
