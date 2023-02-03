import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { GoCommentDiscussion } from "react-icons/go";

function BlogCard() {
  return (
    <div className="mx-2 lg:mb-0 mb-8 hover:shadow-2xl ">
      <div className="relative group">
        <Image
          src={"/images/blogs/blog.jpg"}
          alt="image"
          width={500}
          height={500}
          className="w-full "
        />
        <div className=" top-5 left-5 absolute">
          <p className="text-xs text-white group-hover:bg-megamind_red bg-megamind_black px-3 py-1 rounded-md transition-all duration-500">
            01-Sep-2023
          </p>
          <div className="h-3 w-3 absolute  top-4 left-3 rotate-45 bg-megamind_black group-hover:bg-megamind_red transition-all duration-500"></div>
        </div>
      </div>
      <div className="">
        <div className="flex items-center justify-between px-4 pt-4">
          <div className="flex items-center justify-center space-x-2">
            <AiOutlineUser className="text-megamind_red" />
            <p className="text-gray-500 text-xs">Admin</p>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <GoCommentDiscussion className="text-megamind_red" />
            <p className="text-gray-500 text-xs"> {0} Comments</p>
          </div>
        </div>
        <div className="p-4">
          <h1 className="text-xl font-Red_Hat_Display font-extrabold dark:text-megamind_white my-4 cursor-pointer">
            Standard Size Of Business Agency Consulating Management.
          </h1>
          <hr className="opacity-10 dark:opacity-50 dark:border-megamind_red border-megamind_black mb-4" />
          <div className="flex items-center justify-between ">
            <Link
              href={"#"}
              className="hover:text-megamind_red dark:hover:text-megamind_red dark:text-megamind_white "
            >
              Read More +
            </Link>
            <p className="text-gray-500">4 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
