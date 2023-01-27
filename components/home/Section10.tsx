import { initAOS } from "@/utils/aos";
import Image from "next/image";
import React, { useEffect } from "react";
import Testimonials from "./testimonials/Testimonials";

function Section10() {
  useEffect(() => {
    initAOS();
  }, []);
  return (
    <div className="px-4 py-16 md:px-10 lg:px-14 dark:bg-megamind_black">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div  className=" 2xl:ml-64 xl:ml-10 py-10">
          <Testimonials />
        </div>
        <div data-aos="zoom-in-up">
          <Image
            src={"/images/section9/testimonial.jpg"}
            alt=""
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
}

export default Section10;
