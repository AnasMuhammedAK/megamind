import { initAOS } from "@/utils/aos";
import React, { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";

function Text1() {
  useEffect(() => {
    initAOS();
  }, []);
  return (
    <div>
      <div
        id="text"
        className=" leading-[100px] text-start font-Red_Hat_Display font-extrabold text-megamind_black"
      >
        <div data-aos="zoom-in-up" className="flex items-center mb-4">
          <h1 className="border-b-2  border-megamind_red w-8"></h1>
          <h1 className="ml-3 leading-normal text-xl text-megamind_red">
            Modern Digital Solutions
          </h1>
        </div>
        <span>W</span>
        <span>e&apos;</span>
        <span>r</span>
        <span>e</span>
        <span> D</span>
        <span>i</span>
        <span>g</span>
        <span>i</span>
        <span>t</span>
        <span>a</span>
        <span>l</span>
        <br />
        <span> S</span>
        <span>o</span>
        <span>l</span>
        <span>u</span>
        <span>t</span>
        <span>i</span>
        <span>o</span>
        <span>n</span>
        <span> A</span>
        <span>g</span>
        <span>e</span>
        <span>n</span>
        <span>c</span>
        <span>y</span>
        <span id="dot" className="text-megamind_red">
          .
        </span>
        <div
          data-aos="fade-right"
          className="flex items-center leading-normal text-lg mb-[-30px] mt-[30px]"
        >
          <button className=" py-3 animationbutton rounded text-white flex items-center justify-center">
            Get Free Consulting <BsArrowRight className="text-xl ml-3 mt-1" />
          </button>
          <button className="ml-10 hover:text-megamind_red flex items-center justify-center">
            Our Services
            <BsArrowRight className="text-xl ml-3 mt-1" />
          </button>
        </div>
      </div>
      <style jsx>{`
        #text {
          width: 100%;
          position: relative;
          /* top: 50%; */
          transform: translateY(-50%);
        }

        span {
          font-size: calc(2.4em);
          padding: 0 calc(0rem);
          position: relative;
          opacity: 0;
        }

        span:not(#dot) {
          bottom: -400px;
          animation-name: appear;
          animation-duration: 1s;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
        }

        span:nth-of-type(2) {
          animation-delay: 0.1s;
        }

        span:nth-of-type(3) {
          animation-delay: 0.2s;
        }

        span:nth-of-type(4) {
          animation-delay: 0.3s;
        }

        span:nth-of-type(5) {
          animation-delay: 0.4s;
        }
        span:nth-of-type(6) {
          animation-delay: 0.5s;
        }
        span:nth-of-type(7) {
          animation-delay: 0.6s;
        }
        span:nth-of-type(8) {
          animation-delay: 0.7s;
        }
        span:nth-of-type(9) {
          animation-delay: 0.8s;
        }
        span:nth-of-type(10) {
          animation-delay: 0.9s;
        }
        span:nth-of-type(11) {
          animation-delay: 1s;
        }
        span:nth-of-type(12) {
          animation-delay: 1.1s;
        }
        span:nth-of-type(13) {
          animation-delay: 1.2s;
        }
        span:nth-of-type(14) {
          animation-delay: 1.3s;
        }
        span:nth-of-type(15) {
          animation-delay: 1.4s;
        }
        span:nth-of-type(16) {
          animation-delay: 1.5s;
        }
        span:nth-of-type(17) {
          animation-delay: 1.6s;
        }
        span:nth-of-type(18) {
          animation-delay: 1.7s;
        }
        span:nth-of-type(19) {
          animation-delay: 1.8s;
        }
        span:nth-of-type(20) {
          animation-delay: 1.9s;
        }
        span:nth-of-type(21) {
          animation-delay: 2s;
        }
        span:nth-of-type(22) {
          animation-delay: 2.1s;
        }
        span:nth-of-type(23) {
          animation-delay: 2.2s;
        }
        span:nth-of-type(24) {
          animation-delay: 2.3s;
        }
        span:nth-of-type(25) {
          animation-delay: 2.4s;
        }

        #dot {
          bottom: 100px;
          animation-name: dot;
          animation-duration: 1s;
          animation-timing-function: ease-in;
          animation-fill-mode: forwards;
          animation-delay: 2.5s;
        }

        @keyframes appear {
          0% {
            opacity: 0;
            bottom: -400px;
          }
          20% {
            opacity: 0.5;
            bottom: 0px;
          }
          100% {
            opacity: 1;
            bottom: 0;
          }
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
    </div>
  );
}

export default Text1;
