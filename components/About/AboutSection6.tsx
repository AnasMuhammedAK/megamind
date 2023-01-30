import React from "react";

function AboutSection6() {
  return (
    <div className=" w-full 2xl:px-96 px-4 md:px-10 lg:px-20 xl:px-64">
      <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-10 ">
        <div data-aos="zoom-in-up"  className=" sm:px-8 py-6">
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
        <div data-aos="zoom-in-up"  className="sm:px-8 py-6 ">
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
        <div data-aos="zoom-in-up"  className="sm:px-8 py-6 ">
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
        <div data-aos="zoom-in-up"  className=" sm:px-8 py-6">
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
    </div>
  );
}

export default AboutSection6;
