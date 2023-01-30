import { initAOS } from "@/utils/aos";
import React, { useEffect, useState } from "react";
import CircularProgress from "./cards/CircularProgress";
import Questions2 from "./dropdown/Questions2";
function Section7() {
  useEffect(() => {
    initAOS();
  }, []);
  const Data = [
    {
      question: "What is Digital Solutions ?",
      answer:
        " On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment so blinded by desire",
    },
    {
      question: "How to Improve your Business ?",
      answer:
        " On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment so blinded by desire",
    },
    {
      question: "What is the standard size of business cards ?",
      answer:
        " On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment so blinded by desire",
    },
    {
      question: "What should be listed business card ?",
      answer:
        " On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment so blinded by desire",
    },
  ];
  const [open, setOpen] = useState(10000);
  const togle = (index:number) => {
    if (open === index) {
      return setOpen(10000);
    }
    setOpen(index);
  };
  return (
    <div className="dark:bg-megamind_black/90 bg-megamind_black/5 w-full min-h-[520px] 2xl:px-96 px-4 md:px-10 lg:px-20 xl:px-64 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <div data-aos="zoom-in-up" className="flex items-center ">
            <h1 className="border-b-2  border-megamind_red w-8"></h1>
            <h1 className="ml-3  text-xl text-megamind_red">
              Growth Our Business
            </h1>
          </div>
          <h1
            data-aos="zoom-in-up"
            className="font-Red_Hat_Display text-4xl dark:text-megamind_white font-extrabold lg:max-w-[450px]  mt-5"
          >
            Have any Questions On Minds? Asked Questions
          </h1>
          <p
            data-aos="zoom-in-up"
            className="text-gray-500 lg:max-w-[450px] py-4 leading-7"
          >
            On the other hand denounce with righteous indignation dislike men
            who are beguiled and demoralized by the charms pleasure moment, so
            blinded by desire that they cannot foresee
          </p>
          <div className="grid grid-cols-1   sm:hidden">
            <div className="my-10 flex flex-col items-center justify-center">
              <CircularProgress value={69} />
              <h1
                data-aos="fade-right"
                className="text-lg  font-semibold mt-4  dark:text-megamind_white pl-2 mb-4"
              >
                Digital Analysis
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center">
              <CircularProgress value={82} />
              <h1
                data-aos="fade-left"
                className="text-lg  font-semibold mt-4  dark:text-megamind_white pl-2 mb-4"
              >
                Web Development
              </h1>
            </div>
          </div>

          <div className="hidden sm:block">
            <div className="flex  items-center justify-center lg:justify-start lg:space-x-20 space-x-10 mt-6 ">
              <div
                data-aos="fade-up-right"
                className="flex flex-col items-center justify-center"
              >
                <CircularProgress value={69} />
                <h1
                  data-aos="fade-right"
                  className="text-lg  font-semibold mt-4 text-center dark:text-megamind_white"
                >
                  Digital Analysis
                </h1>
              </div>
              <div className="border-r-2 border-gray-400 border-opacity-30 sm:h-[130px] h-[200px]"></div>
              <div
                data-aos="fade-up-left"
                className="flex flex-col items-center justify-center"
              >
                <CircularProgress value={82} />
                <h1
                  data-aos="fade-left"
                  className="text-lg  font-semibold mt-4 text-center dark:text-megamind_white"
                >
                  Web Development
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in-up" className=" max-w-[360px] sm:max-w-full grid">
          {/* <Questions /> */}
          {Data?.map((item, index) => (
            <Questions2
              key={index}
              togle={() => togle(index)}
              open={index === open}
              question={item?.question}
              answer={item?.answer}
            
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section7;
