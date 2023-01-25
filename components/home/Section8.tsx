import React from "react";

function Section8() {
  return (
    <div className="dark:bg-megamind_black  w-full  2xl:px-96 px-4 md:px-10 lg:px-20 xl:px-64 py-16">
      <div className="flex items-center xl:mt-16 w-full justify-center">
        <h1 className="border-b-2  border-megamind_red w-12"></h1>
        <h1 className="mx-4  text-xl text-megamind_red">Working Member</h1>
        <h1 className="border-b-2  border-megamind_red w-12"></h1>
      </div>
      <h1 className="font-Red_Hat_Display md:text-4xl text-3xl dark:text-megamind_white font-extrabold text-center mt-6">
        EXPERT<span className="text-megamind_red font-semibold px-2">TEAM</span>
        MEMBER
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 py-16">
        <section className="mb-16">
          <div className="overflow-hidden min-h-[270px] w-full h-full  2xl:max-h-[270px] group rounded-md">
            <div className="bg-[url(https://surielementor.com/bixoshtml/assets/images/image-box/team-1.jpg)] bg-cover bg-center h-full w-full  flex items-center justify-center">
              <div className="w-1/6 h-1/6 group-hover:w-full group-hover:h-full group-hover:bg-megamind_red group-hover:bg-opacity-20 transition-all duration-500"></div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-gray-500 text-center mb-1">Founder</h3>
            <h1 className="text-xl cursor-pointer font-Red_Hat_Display text-center font-semibold hover:text-megamind_red dark:text-megamind_red dark:hover:text-megamind_white">
              Subrom Monalisa Era
            </h1>
          </div>
        </section>
        <section className="mb-16">
          <div className="overflow-hidden min-h-[270px] w-full h-full   2xl:max-h-[270px] group rounded-md">
            <div className="bg-[url(https://surielementor.com/bixoshtml/assets/images/image-box/team-2.jpg)] bg-cover bg-center h-full w-full  flex items-center justify-center">
              <div className="w-1/6 h-1/6 group-hover:w-full group-hover:h-full group-hover:bg-megamind_red group-hover:bg-opacity-20 transition-all duration-500"></div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-gray-500 text-center mb-1">Manager</h3>
            <h1 className="text-xl cursor-pointer font-Red_Hat_Display text-center font-semibold hover:text-megamind_red dark:text-megamind_red dark:hover:text-megamind_white">
              Noah Oliver Elijah
            </h1>
          </div>
        </section>
        <div className="mb-16">
          <div className="overflow-hidden min-h-[270px] w-full h-full   2xl:max-h-[270px] group rounded-md">
            <div className="bg-[url(https://surielementor.com/bixoshtml/assets/images/image-box/team-3.jpg)] bg-cover bg-center h-full w-full  flex items-center justify-center">
              <div className="w-1/6 h-1/6 group-hover:w-full group-hover:h-full group-hover:bg-megamind_red group-hover:bg-opacity-20 transition-all duration-500"></div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-gray-500 text-center mb-1">Founder</h3>
            <h1 className="text-xl cursor-pointer font-Red_Hat_Display text-center font-semibold hover:text-megamind_red dark:text-megamind_red dark:hover:text-megamind_white">
              Liam Olivia Emma
            </h1>
          </div>
        </div>
        <div className="mb-16">
          <div className="overflow-hidden min-h-[270px] w-full h-full   2xl:max-h-[270px] group rounded-md">
            <div className="bg-[url(https://surielementor.com/bixoshtml/assets/images/image-box/team-4.jpg)] bg-cover bg-center h-full w-full  flex items-center justify-center">
              <div className="w-1/6 h-1/6 group-hover:w-full group-hover:h-full group-hover:bg-megamind_red group-hover:bg-opacity-20 transition-all duration-500"></div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-gray-500 text-center mb-1">Founder</h3>
            <h1 className="text-xl cursor-pointer font-Red_Hat_Display text-center font-semibold hover:text-megamind_red dark:text-megamind_red dark:hover:text-megamind_white">
              William Ames Benjamin
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section8;
