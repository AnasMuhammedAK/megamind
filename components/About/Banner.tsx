import Link from "next/link";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";

function Banner({ heading, pageName }: any) {
  return (
    <div className="bg-[url(/images/banner.jpg)] w-full h-80 bg-cover bg-center">
      <div className="w-full bg-black bg-opacity-50 h-80 flex flex-col justify-center items-center ">
        <h1 className="text-7xl font-Red_Hat_Display font-extrabold text-center text-megamind_white">
          About Us<span className="text-megamind_red">.</span>
        </h1>
        <div className="flex justify-center items-center text-white text-sm mt-2 space-x-2 ">
          <Link href={"/"} className="hover:text-megamind_red">
            Home Page
          </Link>
          <AiOutlineRight />
          <p>About Us</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
