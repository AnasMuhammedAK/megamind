import MainFooter from "components/Footer/MainFooter";
import MainHeader from "components/Header/MainHeader";
import Sidebar from "components/sidebar/Sidebar";
import React, { useState } from "react";
import { SlArrowUp } from "react-icons/sl";
import { Link } from "react-scroll";
import { Router } from "next/router";
import NProgress from "nprogress";
import { Toaster } from "react-hot-toast";

function Layout({ children }: any) {
  const [isDark, setIsDark] = useState(false);
  const [sidebar, openSidebar] = useState(false);

  NProgress.configure({ showSpinner: false });
  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

  return (
    <div id="target" className="flex min-h-screen flex-col justify-between">
      <header className="border-b-0  fixed top-0 left-0 right-0 z-10 ">
        <MainHeader
          isDark={isDark}
          setIsDark={setIsDark}
          sidebar={sidebar}
          openSidebar={openSidebar}
        />
      </header>
      <main className="flex ">
        <Toaster position="top-right" reverseOrder={false} />
        <Sidebar openSidebar={openSidebar} sidebar={sidebar} />
        <div className="flex-grow mt-24">
          {children}
          <footer className="shadow-inner relative">
            <MainFooter isDark={isDark} />
            <Link to="target" spy={true} smooth={true} duration={500}>
              <SlArrowUp className="text-megamind_white dark:text-megamind_black hover:bg-megamind_red dark:hover:bg-megamind_red hover:text-megamind_black fixed bottom-16 right-4 w-12 cursor-pointer h-12 rounded p-3 bg-megamind_black dark:bg-megamind_white" />
            </Link>
          </footer>
        </div>
      </main>
      {/* <footer className="shadow-inner relative">
        <MainFooter isDark={isDark} />
        <Link to="target" spy={true} smooth={true}  duration={500}>
          <SlArrowUp className="text-megamind_white dark:text-megamind_black hover:bg-megamind_red dark:hover:bg-megamind_red hover:text-megamind_black fixed bottom-16 right-4 w-12 cursor-pointer h-12 rounded p-3 bg-megamind_black dark:bg-megamind_white" />
        </Link>
      </footer> */}
    </div>
  );
}

export default Layout;
