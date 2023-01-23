import MainFooter from "components/Footer/MainFooter";
import MainHeader from "components/Header/MainHeader";
import Sidebar from "components/sidebar/Sidebar";
import React, { useState } from "react";

function Layout({ children }: any) {
  const [isDark, setIsDark] = useState(false);
  const [sidebar, openSidebar] = useState(false);
  return (
    <div className="flex min-h-screen flex-col justify-between ">
      <header className="border-b-0  fixed top-0 left-0 right-0 z-10 ">
        <MainHeader
          isDark={isDark}
          setIsDark={setIsDark}
          sidebar={sidebar}
          openSidebar={openSidebar}
        />
      </header>
      <main className="flex mt-24 pb-10 dark:bg-megamind_black/80 ">
        <Sidebar openSidebar={openSidebar} sidebar={sidebar} />
        <div className="flex-grow ">{children}</div>
      </main>
      <footer className="shadow-inner">
        <MainFooter isDark={isDark} />
      </footer>
    </div>
  );
}

export default Layout;
