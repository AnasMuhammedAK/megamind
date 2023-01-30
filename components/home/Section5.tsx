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
       
      </div>
    </div>
  );
}

export default Section5;
