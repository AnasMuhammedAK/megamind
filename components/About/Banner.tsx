import Link from "next/link";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";

function Banner({ pageName, Active }: any) {
  return (
    <div className="bg-[url(/images/banner.jpg)] w-full h-80 bg-cover bg-center">
      <div className="w-full bg-black bg-opacity-50 h-80 flex flex-col justify-center items-center ">
        <h1 className="text-7xl font-Red_Hat_Display font-extrabold text-center text-megamind_white">
          {pageName}
          <span id="dot" className="text-megamind_red">
            .
          </span>
          <style jsx>{`
            #text {
              width: 100%;
              position: relative;
              transform: translateY(-50%);
            }

            span {
              padding: 0 calc(0rem);
              position: relative;
              opacity: 0;
            }
            #dot {
              bottom: 100px;
              animation-name: dot;
              animation-duration: 1s;
              animation-timing-function: ease-in;
              animation-fill-mode: forwards;
              animation-delay: 0.5s;
            }
            @keyframes dot {
              0% {
                opacity: 0;
                bottom: 100px;
              }

              50% {
                opacity: 1;
                bottom: 0;
              }

              65% {
                opacity: 1;
                bottom: 15px;
              }

              75% {
                opacity: 1;
                bottom: 0;
              }

              90% {
                opacity: 1;
                bottom: 10px;
              }

              100% {
                opacity: 1;
                bottom: 0;
              }
            }
          `}</style>
        </h1>
        <div className="flex justify-center items-center text-white text-sm mt-2 space-x-2 ">
          <Link href={"/"} className="hover:text-megamind_red">
            Home Page
          </Link>
          <AiOutlineRight />
          {Active === "service_details" ? (
            <>
              <Link href={"/services"} className="hover:text-megamind_red">
                Services
              </Link>
              <AiOutlineRight />
            </>
          ) : (
            ""
          )}
          <p>{pageName}</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
