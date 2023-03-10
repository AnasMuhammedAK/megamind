import { initAOS } from "@/utils/aos";
import React, { useEffect } from "react";
import Section3Card from "./cards/Section3Card";

function Section3() {
  useEffect(() => {
    initAOS();
  }, []);
  return (
    <div className=" dark:bg-megamind_black w-full min-h-[520px]  px-4 md:px-10 lg:px-20 2xl:px-40 4xl:px-48 6xl:px-64 7xl:px-80 py-16">
      <div data-aos="zoom-in-up" className="flex items-center xl:mt-16 w-full justify-center">
        <h1 className="border-b-2  border-megamind_red w-12"></h1>
        <h1 className="mx-4  text-xl text-megamind_red">Over 20+ Clients</h1>
        <h1 className="border-b-2  border-megamind_red w-12"></h1>
      </div>
      <h1 data-aos="zoom-in-up" className="font-Red_Hat_Display text-4xl dark:text-megamind_white font-extrabold text-center mt-6">
        Amazing Solutions For Digital Agency
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-10 mt-10">
        <Section3Card
          heading={"SEO Optimization"}
          icon={"FaSearchengin"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis sagittis tortor."
          }
          id="1"
        />
        <Section3Card
          heading={"UX/UI Design"}
          icon={"FaFigma"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis sagittis tortor."
          }
          id="1"
        />
        <Section3Card
          heading={"Web Development"}
          icon={"FaReact"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis sagittis tortor."
          }
          id="1"
        />
        <Section3Card
          heading={"Content Writing"}
          icon={"GiNotebook"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis sagittis tortor."
          }
          id="1"
        />
      </div>
    </div>
  );
}

export default Section3;
