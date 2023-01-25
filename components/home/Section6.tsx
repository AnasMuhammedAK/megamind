import Link from "next/link";
import React from "react";
import Carousel from "react-elastic-carousel";

function Section6() {
  const items = [
    { id: 1, title: "item #1", url: "" },
    { id: 2, title: "item #2" },
    { id: 3, title: "item #3" },
    { id: 4, title: "item #4" },
    { id: 5, title: "item #5" },
  ];
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div className="px-4 py-16 dark:bg-megamind_black">
      <Carousel breakPoints={breakPoints}>
        <section>
          <div className="h-[430px] max-h-[430px] w-[430px] mb-10 overflow-hidden  group">
            <div className="bg-[url(https://surielementor.com/bixoswp/wp-content/uploads/2022/04/profolio-6-min.jpg)]  h-full w-full bg-cover bg-center hover:scale-110 transition-all duration-500 ">
              <div className="w-full h-full hover:bg-megamind_red opacity-20 "></div>
              <div className="w-[430px] rounded-b-lg  h-28 bg-megamind_white dark:bg-megamind_black absolute bottom-2 translate-y-36  group-hover:translate-y-[-8px] transition-all duration-300">
                <div className="flex items-center my-4 px-10">
                  <h1 className="border-b-2  border-megamind_red w-8 "></h1>
                  <h1 className="ml-3   text-megamind_red font-Red_Hat_Display text-xl hover:translate-x-2 transition-all duration-200">
                    <Link href={""}>Digital Marketing Onboarding</Link>
                  </h1>
                </div>
                <h3 className=" px-24  text-gray-500">XD Design</h3>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="h-[430px] max-h-[430px] w-[430px] mb-10 overflow-hidden  group">
            <div className="bg-[url(https://surielementor.com/bixoswp/wp-content/uploads/2022/04/profolio-7-min.jpg)]  h-full w-full bg-cover bg-center hover:scale-110 transition-all duration-500 ">
              <div className="w-full h-full hover:bg-megamind_red opacity-20 "></div>
              <div className="w-[430px] rounded-b-lg  h-28 bg-megamind_white dark:bg-megamind_black absolute bottom-2 translate-y-36  group-hover:translate-y-[-8px] transition-all duration-300">
                <div className="flex items-center my-4 px-10">
                  <h1 className="border-b-2  border-megamind_red w-8 "></h1>
                  <h1 className="ml-3   text-megamind_red font-Red_Hat_Display text-xl hover:translate-x-2 transition-all duration-200">
                    <Link href={""}>Web Development</Link>
                  </h1>
                </div>
                <h3 className=" px-24  text-gray-500">XD Design</h3>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="h-[430px] max-h-[430px] w-[430px] mb-10 overflow-hidden  group">
            <div className="bg-[url(https://surielementor.com/bixoswp/wp-content/uploads/2022/04/profolio-8-min.jpg)]  h-full w-full bg-cover bg-center hover:scale-110 transition-all duration-500 ">
              <div className="w-full h-full hover:bg-megamind_red opacity-20 "></div>
              <div className="w-[430px] rounded-b-lg  h-28 bg-megamind_white dark:bg-megamind_black absolute bottom-2 translate-y-36  group-hover:translate-y-[-8px] transition-all duration-300">
                <div className="flex items-center my-4 px-10">
                  <h1 className="border-b-2  border-megamind_red w-8 "></h1>
                  <h1 className="ml-3   text-megamind_red font-Red_Hat_Display text-xl hover:translate-x-2 transition-all duration-200">
                    <Link href={""}>SEO & Content Writing</Link>
                  </h1>
                </div>
                <h3 className=" px-24  text-gray-500">XD Design</h3>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="h-[430px] max-h-[430px] w-[430px] mb-10 overflow-hidden  group">
            <div className="bg-[url(https://surielementor.com/bixoswp/wp-content/uploads/2022/04/profolio-9-min.jpg)]  h-full w-full bg-cover bg-center hover:scale-110 transition-all duration-500 ">
              <div className="w-full h-full hover:bg-megamind_red opacity-20 "></div>
              <div className="w-[430px] rounded-b-lg  h-28 bg-megamind_white dark:bg-megamind_black absolute bottom-2 translate-y-36  group-hover:translate-y-[-8px] transition-all duration-300">
                <div className="flex items-center my-4 px-10">
                  <h1 className="border-b-2  border-megamind_red w-8 "></h1>
                  <h1 className="ml-3   text-megamind_red font-Red_Hat_Display text-xl hover:translate-x-2 transition-all duration-200">
                    <Link href={""}>Graphic Design</Link>
                  </h1>
                </div>
                <h3 className=" px-24  text-gray-500">XD Design</h3>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="h-[430px] max-h-[430px] w-[430px] mb-10 overflow-hidden  group">
            <div className="bg-[url(https://surielementor.com/bixoswp/wp-content/uploads/2022/04/profolio-10-min.jpg)]  h-full w-full bg-cover bg-center hover:scale-110 transition-all duration-500 ">
              <div className="w-full h-full hover:bg-megamind_red opacity-20 "></div>
              <div className="w-[430px] rounded-b-lg  h-28 bg-megamind_white dark:bg-megamind_black absolute bottom-2 translate-y-36  group-hover:translate-y-[-8px] transition-all duration-300">
                <div className="flex items-center my-4 px-10">
                  <h1 className="border-b-2  border-megamind_red w-8 "></h1>
                  <h1 className="ml-3   text-megamind_red font-Red_Hat_Display text-xl hover:translate-x-2 transition-all duration-200">
                    <Link href={""}>Bussiness Agency</Link>
                  </h1>
                </div>
                <h3 className=" px-24  text-gray-500">XD Design</h3>
              </div>
            </div>
          </div>
        </section>
      </Carousel>
    </div>
  );
}

export default Section6;
