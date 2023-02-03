import { initAOS } from "@/utils/aos";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";

function Projects() {
  useEffect(() => {
    initAOS();
  }, []);
  return (
    <div>
      <div className="flex justify-center items-center flex-col px-4  md:px-6  xl:px-20 py-9 md:py-12 xl:py-10 dark:bg-megamind_black ">
        <section>
          <div
            data-aos="zoom-in-up"
            className="flex items-center xl:mt-16 w-full justify-center"
          >
            <h1 className="border-b-2  border-megamind_red w-12"></h1>
            <h1 className="mx-4  text-xl text-megamind_red">Our Works</h1>
            <h1 className="border-b-2  border-megamind_red w-12"></h1>
          </div>
          <h1
            data-aos="zoom-in-up"
            className="font-Red_Hat_Display md:text-4xl text-3xl dark:text-megamind_white font-extrabold text-center mt-6"
          >
            PERFECTION IS NOT A MYTH CHECK OUR WORK.
          </h1>
        </section>
        <section className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-4 md:gap-6 xl:gap-8 mt-8 md:mt-10 xl:mt-12">
          <div
            data-aos="zoom-in-up"
            className="w-full relative group overflow-hidden"
          >
            <Image
              src={"/images/projects/1.jpg"}
              alt="image"
              width={385}
              height={385}
              className="w-full group-hover:scale-110 transition-all duration-300"
            />
            <div className="w-full h-full bg-megamind_red absolute top-0 opacity-30 group-hover:block hidden group-hover:scale-110 transition-all duration-300"></div>
          </div>
          <div
            data-aos="zoom-in-up"
            className="w-full relative group overflow-hidden"
          >
            <Image
              src={"/images/projects/4.jpg"}
              alt="image"
              width={385}
              height={385}
              className="w-full group-hover:scale-110 transition-all duration-300"
            />
            <div className="w-full h-full bg-megamind_red absolute top-0 opacity-30 group-hover:block hidden group-hover:scale-110 transition-all duration-300"></div>
          </div>
          <div
            data-aos="zoom-in-up"
            className="w-full relative group overflow-hidden"
          >
            <Image
              src={"/images/projects/3.jpg"}
              alt="image"
              width={385}
              height={385}
              className="w-full group-hover:scale-110 transition-all duration-300"
            />
            <div className="w-full h-full bg-megamind_red absolute top-0 opacity-30 group-hover:block hidden group-hover:scale-110 transition-all duration-300"></div>
          </div>
        </section>
        <section data-aos="zoom-in-up" className="flex justify-center mt-10">
          <Link
            href={"/projects"}
            className=" py-3 animationbutton rounded text-white flex items-center justify-center"
          >
            Explore <BsArrowRight className="text-xl ml-3 mt-1" />
          </Link>
        </section>
      </div>
    </div>
  );
}
export default Projects;
