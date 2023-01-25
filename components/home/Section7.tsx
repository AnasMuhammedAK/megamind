import React from "react";
import CircularProgress from "./cards/CircularProgress";
import Questions from "./dropdown/Questions";
function Section7() {
  return (
    <div className="dark:bg-megamind_black/95 bg-megamind_black/5 w-full min-h-[520px] 2xl:px-96 px-4 md:px-10 lg:px-20 xl:px-64 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <div className="flex items-center ">
            <h1 className="border-b-2  border-megamind_red w-12"></h1>
            <h1 className="ml-3  text-2xl text-megamind_red">
              Growth Our Business
            </h1>
          </div>
          <h1 className="font-Red_Hat_Display text-4xl dark:text-megamind_white font-extrabold max-w-[450px]  mt-5">
            Have any Questions On Minds? Asked Questions
          </h1>
          <p className="text-gray-500 max-w-[450px] py-4">
            On the other hand denounce with righteous indignation dislike men
            who are beguiled and demoralized by the charms pleasure moment, so
            blinded by desire that they cannot foresee
          </p>
          <div className="flex items-center space-x-20 mt-6">
            <div className="flex flex-col items-center justify-center">
              <CircularProgress value={69} />
              <h1 className="text-lg  font-semibold mt-4 text-center dark:text-megamind_white">
                Digital Analysis
              </h1>
            </div>
            <div className="border-r-2 border-gray-400 border-opacity-30 h-[130px]"></div>
            <div className="flex flex-col items-center justify-center">
              <CircularProgress value={82} />
              <h1 className="text-lg  font-semibold mt-4 text-center dark:text-megamind_white">
                Web Development
              </h1>
            </div>
          </div>
        </div>
        <div>
          <Questions />
        </div>
      </div>
    </div>
  );
}

export default Section7;
