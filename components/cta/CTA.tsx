import React from "react";
import Text1 from "./Text1";

function CTA() {
  return (
    <div className=" w-full h-[720px] text-4xl bg-cover bg-center  dark:text-megamind_white px-4 md:px-20 2xl:px-60 flex items-center justify-center md:justify-start bg-[url(https://surielementor.com/bixoswp/wp-content/uploads/2022/05/bg-slider-4.jpg)]">
      <div className="mt-[550px] sm:mt-[400px] md:mt-[300px]">
        <Text1 />
      </div>
    </div>
  );
}

export default CTA;
