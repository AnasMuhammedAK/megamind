import { initAOS } from "@/utils/aos";
import Banner from "components/About/Banner";
import BlogCard from "components/blog/BlogCard";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { AiFillCaretRight, AiOutlineUser } from "react-icons/ai";
import { GoCommentDiscussion } from "react-icons/go";

function Index() {
  useEffect(() => {
    initAOS();
  }, []);
  return (
    <div>
      <Head>
        <title>megamind | Blogs</title>
      </Head>
      <Banner pageName={"Blogs"} Active={"blogs"} />
      <div className="dark:bg-megamind_black  w-full  2xl:px-80 px-4 md:px-10 lg:px-20 xl:px-64 pb-16 pt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:col-span-2">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
          <div className="bg-megamind_black/10 dark:bg-megamind_white/10 max-h-[500px] px-6 py-10">
            <h1 className="text-2xl font-semibold dark:text-megamind_white">
              Search Here
            </h1>
            <div className="max-w-md mx-auto py-6">
              <div className=" flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                <div className="grid place-items-center h-full w-12 text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                  type="text"
                  id="search"
                  placeholder="Search something.."
                />
              </div>
            </div>
            <h1 className="text-2xl font-semibold dark:text-megamind_white">
              Category
            </h1>
            <div
              className={`mt-4 dark:text-white font-Red_Hat_Display  space-y-4`}
            >
              <div
                className={`flex items-center cursor-pointer hover:text-megamind_red dark:hover:text-megamind_red `}
              >
                <AiFillCaretRight />
                <Link href={"#"}>UX strategy</Link>
              </div>
              <div
                className={`flex items-center cursor-pointer hover:text-megamind_red dark:hover:text-megamind_red  `}
              >
                <AiFillCaretRight />
                <Link href={"#"}>Information architecture</Link>
              </div>
              <div
                className={`flex items-center cursor-pointer hover:text-megamind_red dark:hover:text-megamind_red  `}
              >
                <AiFillCaretRight />
                <Link href={"#"}>Prototyping</Link>
              </div>
              <div
                className={`flex items-center cursor-pointer hover:text-megamind_red dark:hover:text-megamind_red  `}
              >
                <AiFillCaretRight />
                <Link href={"#"}>Wireframing</Link>
              </div>
              <div
                className={`flex items-center cursor-pointer hover:text-megamind_red dark:hover:text-megamind_red  `}
              >
                <AiFillCaretRight />
                <Link href={"#"}>UI Design</Link>
              </div>
              <div
                className={`flex items-center cursor-pointer hover:text-megamind_red dark:hover:text-megamind_red  `}
              >
                <AiFillCaretRight />
                <Link href={"#"}>Figma Design</Link>
              </div>
              <div
                className={`flex items-center cursor-pointer hover:text-megamind_red dark:hover:text-megamind_red  `}
              >
                <AiFillCaretRight />
                <Link href={"#"}>XD Design</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
