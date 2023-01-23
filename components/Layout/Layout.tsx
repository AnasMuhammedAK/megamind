import MainFooter from "components/Footer/MainFooter";
import MainHeader from "components/Header/MainHeader";
import Sidebar from "components/sidebar/Sidebar";
import React, { useState } from "react";
import { SlArrowUp } from "react-icons/sl";

function Layout({ children }: any) {
  const [isDark, setIsDark] = useState(false);
  const [sidebar, openSidebar] = useState(false);
  return (
    <div className="flex min-h-screen flex-col justify-between">

      <header className="border-b-0  fixed top-0 left-0 right-0 z-10 " id="top">
        <MainHeader
          isDark={isDark}
          setIsDark={setIsDark}
          sidebar={sidebar}
          openSidebar={openSidebar}
        />
      </header>
      <main className="flex ">
        <Sidebar openSidebar={openSidebar} sidebar={sidebar} />
        <div className="flex-grow mt-24">{children}</div>
      </main>
      <footer className="shadow-inner relative">
        <MainFooter isDark={isDark} />
        <a href="#">
          <SlArrowUp className="text-megamind_white dark:text-megamind_black hover:bg-megamind_red dark:hover:bg-megamind_red hover:text-megamind_black fixed bottom-16 right-4 w-12 cursor-pointer h-12 rounded p-3 bg-megamind_black dark:bg-megamind_white" />
        </a>
      </footer>
    </div>
  );
}

export default Layout;
