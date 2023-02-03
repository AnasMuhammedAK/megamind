import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
function MainFooter({ isDark }: any) {
  const router = useRouter();
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-megamind_white dark:bg-megamind_black shadow-inner">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center sm:justify-start">
              {isDark ? (
                <Image
                  onClick={() => router.push("/")}
                  src={"/images/logo-mm-white.png"}
                  alt="logo"
                  width={200}
                  height={100}
                  className="cursor-pointer"
                />
              ) : (
                <Image
                  onClick={() => router.push("/")}
                  src={"/images/logo-mm-red.png"}
                  alt="logo"
                  width={200}
                  height={100}
                  className="cursor-pointer"
                />
              )}
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400 sm:mx-0 sm:max-w-xs sm:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              <li>
                <Link
                  href="https://www.youtube.com/@megamind.studio"
                  rel="noreferrer"
                  target="_blank"
                  className="text-megamind_black transition hover:text-megamind_red dark:text-megamind_white dark:hover:text-megamind_red"
                >
                  <span className="sr-only ">Youtube</span>
                  <AiFillYoutube className="text-2xl transition-all hover:scale-125 duration-100" />
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.instagram.com/megamind.studios/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-megamind_black transition hover:text-megamind_red dark:text-megamind_white dark:hover:text-megamind_red"
                >
                  <span className="sr-only">Instagram</span>
                  <AiFillInstagram className="text-2xl transition-all hover:scale-125 duration-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/megamind.studiosmlr/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-megamind_black transition hover:text-megamind_red dark:text-megamind_white dark:hover:text-megamind_red"
                >
                  <span className="sr-only">Facebook</span>
                  <AiFillFacebook className="text-2xl transition-all hover:scale-125 duration-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="/#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-megamind_black transition hover:text-megamind_red dark:text-megamind_white dark:hover:text-megamind_red"
                >
                  <span className="sr-only">Twitter</span>
                  <AiOutlineTwitter className="text-2xl transition-all hover:scale-125 duration-100" />
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.linkedin.com/company/megamind-creative-outlooks/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-megamind_black transition hover:text-megamind_red dark:text-megamind_white dark:hover:text-megamind_red"
                >
                  <span className="sr-only">Linkedin</span>
                  <AiFillLinkedin className="text-2xl transition-all hover:scale-125 duration-100" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2 px-4 mt-4 sm:mt-0">
            <div className="text-left sm:text-left">
              <p className="text-xl font-medium font-Red_Hat_Display text-gray-900 dark:text-white">
                About Us
              </p>

              <nav aria-label="Footer About Nav" className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-megamind_black transition hover:text-megamind_red dark:text-megamind_white dark:hover:text-megamind_red"
                      href="/"
                    >
                      Company History
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-megamind_black transition hover:text-megamind_red dark:text-megamind_white dark:hover:text-megamind_red"
                      href="/"
                    >
                      Meet the Team
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-megamind_black transition hover:text-megamind_red dark:text-megamind_white dark:hover:text-megamind_red"
                      href="/"
                    >
                      Employee Handbook
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-megamind_black transition hover:text-megamind_red dark:text-megamind_white dark:hover:text-megamind_red"
                      href="/"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-left sm:text-left">
              <p className="text-xl font-medium font-Red_Hat_Display text-gray-900 dark:text-white">
                Our Services
              </p>

              <nav aria-label="Footer Services Nav" className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-megamind_black transition hover:text-megamind_red dark:text-megamind_white dark:hover:text-megamind_red"
                      href="/"
                    >
                      Web Development
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-megamind_black transition hover:text-megamind_red dark:text-megamind_white dark:hover:text-megamind_red"
                      href="/"
                    >
                      Web Design
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-megamind_black transition hover:text-megamind_red dark:text-megamind_white dark:hover:text-megamind_red"
                      href="/"
                    >
                      Marketing
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-megamind_black transition hover:text-megamind_red dark:text-megamind_white dark:hover:text-megamind_red"
                      href="/"
                    >
                      Google Ads
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-left sm:text-left">
              <p className="text-xl font-medium font-Red_Hat_Display text-gray-900 dark:text-white">
                Helpful Links
              </p>

              <nav aria-label="Footer Helpful Nav" className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-megamind_black transition hover:text-megamind_red dark:text-megamind_white dark:hover:text-megamind_red"
                      href="/"
                    >
                      FAQs
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-megamind_black dark:text-megamind_white transition hover:text-megamind_red  dark:hover:text-megamind_red"
                      href="/"
                    >
                      Support
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-left sm:text-left">
              <p className="text-xl font-medium font-Red_Hat_Display text-gray-900 dark:text-white">
                Contact Us
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link
                    className="flex items-center justify-start gap-1.5 sm:justify-start"
                    href="mailto:hello@megamind.studio"
                    target={"_blank"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0 text-megamind_black dark:text-megamind_white "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>

                    <span className="text-megamind_black dark:text-megamind_white  dark:hover:text-megamind_red hover:text-megamind_red">
                      hello@megamind <br />.studio
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    className="flex items-center justify-start  gap-1.5 sm:justify-start"
                    href="tel:123-456-7890"
                    target={"_blank"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0 text-gray-900 dark:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>

                    <span className="text-megamind_black dark:text-megamind_white  dark:hover:text-megamind_red hover:text-megamind_red">
                      123-456-7890
                    </span>
                  </Link>
                </li>

                <li className="flex items-start justify-start  gap-1.5 sm:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0 text-megamind_black dark:text-megamind_white "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <address className="-mt-0.5 not-italic text-megamind_black dark:text-megamind_white ">
                    405, 4th Floor, Sahyadri Campus, Mangaluru, Karnataka
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6 dark:border-gray-800">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <span className="block sm:inline">All rights reserved. </span>

              <Link
                className="inline-block text-megamind_red underline transition hover:text-megamind_red/75 dark:text-megamind_red dark:hover:text-megamind_red/75"
                href="/"
              >
                Terms & Conditions
              </Link>

              <span> </span>

              <Link
                className="inline-block text-megamind_red underline font-Red_Hat_Display transition hover:text-megamind_red/75 dark:text-megamind_red dark:hover:text-megamind_red/75"
                href="/"
              >
                Privacy Policy
              </Link>
            </p>

            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 font-Red_Hat_Display sm:order-first sm:mt-0">
              &copy; {year} Megamind Studios LLP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
