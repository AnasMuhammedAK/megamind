import { initAOS } from "@/utils/aos";
import Link from "next/link";
import React, { useEffect } from "react";
import ContactForm from "./ContactForm";

function ContactAs() {
  useEffect(() => {
    initAOS();
  }, []);
  return (
    <div className="dark:bg-megamind_black w-full  2xl:px-[350px] px-4 md:px-10 lg:px-20 xl:px-64 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <div data-aos="zoom-in-up" className="flex items-center">
            <h1 className="border-b-2  border-megamind_red w-8"></h1>
            <h1 className="ml-3  text-xl text-megamind_red">
              Hi! Let&apos;s Talk Our Companey
            </h1>
          </div>
          <h1
            data-aos="zoom-in-up"
            className="font-Red_Hat_Display text-4xl dark:text-megamind_white font-extrabold md:max-w-[600px] mt-4"
          >
            ADYAR,
            <span className="text-megamind_red"> KARNATAKA</span>
          </h1>
          <p
            data-aos="zoom-in-up"
            className="dark:text-megamind_white/80 text-megamind_black/80 mt-2 "
          >
            405, 4th Floor, Sahyadri Campus, Mangaluru, Karnataka
            <span className="text-megamind_red/80 "> - 575007</span>
          </p>
          <hr
            data-aos="zoom-in-up"
            className="border-megamind_black border-opacity-10 dark:border-opacity-50  dark:border-megamind_red my-6 px-2"
          />
          <div className="dark:text-megamind_white text-megamind_black text-xl font-Red_Hat_Display font-medium">
            <div data-aos="zoom-in-up" className="flex items-center ">
              <p className="w-[100px]">Email</p>
              <p className="mr-2">:</p>
              <Link
                className="hover:text-megamind_red"
                href="mailto:hello@megamind.studio"
              >
                hello@megamind.studio
              </Link>
            </div>
            <div data-aos="zoom-in-up" className="flex items-center mt-4">
              <p className="w-[100px]">Phone</p>
              <p className="mr-2">:</p>
              <Link href="tel:123-456-7890" className="hover:text-megamind_red">
                +91 859-025-3863
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h1
            data-aos="zoom-in-up"
            className="font-Red_Hat_Display md:text-4xl text-3xl dark:text-megamind_white font-extrabold  mt-6"
          >
            GOOD
            <span className="text-megamind_red font-semibold px-2">
              CONTACTS
            </span>
          </h1>
          <p  data-aos="zoom-in-up" className="text-gray-500 my-4">
            Nunc velit metus, volutpat elementum euismod eget, cursus nec nunc.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactAs;
