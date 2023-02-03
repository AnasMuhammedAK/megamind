import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
function MainHeader({ isDark, setIsDark, sidebar, openSidebar }: any) {
  const router = useRouter();
  return (
    <header
      aria-label="Site Header"
      className="bg-megamind_white dark:bg-megamind_black shadow-md fixed top-0 left-0 right-0 w-full"
    >
      <div className="mx-auto  px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="flex h-24 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
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

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Site Nav" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-megamind_dark transition hover:text-megamind_red dark:text-megamind_white dark:hover:text-megamind_red lg:text-lg xl:text-xl font-medium font-Red_Hat_Display font-Red_Hat_Display"
                    href="/"
                  >
                    Home  
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-megamind_dark  transition hover:text-megamind_red dark:text-megamind_white dark:hover:text-megamind_red lg:text-lg xl:text-xl font-medium font-Red_Hat_Display"
                    href="/about"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-megamind_dark  transition hover:text-megamind_red dark:text-megamind_white dark:hover:text-megamind_red lg:text-lg xl:text-xl font-medium font-Red_Hat_Display"
                    href="/services"
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-megamind_dark  transition hover:text-megamind_red dark:text-megamind_white dark:hover:text-megamind_red lg:text-lg xl:text-xl font-medium font-Red_Hat_Display"
                    href="/projects"
                  >
                    Projects
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-megamind_dark  transition hover:text-megamind_red dark:text-megamind_white dark:hover:text-megamind_red lg:text-lg xl:text-xl font-medium font-Red_Hat_Display"
                    href="/blogs"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-megamind_dark  transition hover:text-megamind_red dark:text-megamind_white dark:hover:text-megamind_red lg:text-lg xl:text-xl font-medium font-Red_Hat_Display"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="cursor-pointer border border-megamind_black/10 dark:border-megamind_white/30  w-9 h-9 flex items-center justify-center rounded">
                {isDark ? (
                  <BsFillSunFill
                    className={
                      "w-4 h-4 text-megamind_black dark:text-megamind_white hover:text-megamind_red dark:hover:text-megamind_red text-lg "
                    }
                    onClick={() => {
                      setIsDark(false);

                      document.documentElement.classList.remove("dark");
                    }}
                  />
                ) : (
                  <BsFillMoonStarsFill
                    className={
                      "w-4 h-4  text-megamind_black dark:text-megamind_white hover:text-megamind_red dark:hover:text-megamind_red text-lg"
                    }
                    onClick={() => {
                      setIsDark(true);
                      document.documentElement.classList.add("dark");
                    }}
                  />
                )}
              </div>

              <div className="block md:hidden">
                <button
                  onClick={() => openSidebar(!sidebar)}
                  className=" dark:text-megamind_white p-2 text-megamind_black transition hover:text-megamind_red  dark:hover:text-megamind_red "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
