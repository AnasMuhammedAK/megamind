import { initAOS } from "@/utils/aos";
import React, { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaFigma, FaReact, FaSearchengin } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";

function Section3Card({ icon, heading, content, id }: any) {
  useEffect(() => {
    initAOS();
  }, []);
  return (
    <div
      data-aos="flip-up"
      className="min-h-[300px] cursor-pointer  p-8 rounded border border-megamind_black/10 hover:border-megamind_red group dark:border-megamind_white/20 dark:hover:border-megamind_red group"
    >
      {icon === "FaSearchengin" && (
        <FaSearchengin
          className="h-12 w-12 mb-6  dark:text-megamind_white group-hover:text-megamind_red group-hover:animate-bounce"
          data-aos="fade-left"
        />
      )}
      {icon === "FaFigma" && (
        <FaFigma
          className="h-12 w-12 mb-6  dark:text-megamind_white group-hover:text-megamind_red group-hover:animate-bounce"
            data-aos="fade-left"
        />
      )}
      {icon === "FaReact" && (
        <FaReact
          className="h-12 w-12 mb-6  dark:text-megamind_white group-hover:text-megamind_red group-hover:animate-bounce"
            data-aos="fade-left"
        />
      )}
      {icon === "GiNotebook" && (
        <GiNotebook
          className="h-12 w-12 mb-6  dark:text-megamind_white group-hover:text-megamind_red group-hover:animate-bounce"
            data-aos="fade-left"
        />
      )}
      <h1
        className="dark:text-megamind_white text-xl group-hover:text-megamind_red font-Red_Hat_Display "
        data-aos="zoom-in-up"
      >
        {heading}
      </h1>
      <p className="text-gray-500 py-4 leading-7" data-aos="zoom-in-up">
        {content}
      </p>
      <button
        data-aos="fade-right"
        className=" group-hover:text-megamind_red dark:text-megamind_white flex items-center justify-center font-Red_Hat_Display"
      >
        Read More
        <BsArrowRight className="text-xl ml-3 mt-1" />
      </button>
    </div>
  );
}

export default Section3Card;
