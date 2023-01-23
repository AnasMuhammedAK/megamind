import React from "react";

import items from "../../src/utils/sidebarData.json";
import SidebarItem from "./SidebarItems";

export default function Sidebar({ sidebar, openSidebar }: any) {
  return (
    <div className="flex z-[1000]">
      <div
        className={`sidebar text-megamind_white fixed  top-24 left-0 scrollbar pb-36 ${
          !sidebar ? "translate-x-[-100%]" : "translate-x-0"
        } ease-in-out duration-500  ${sidebar ? "shadow-2xl" : ""}`}
      >
        {items.map((item, index) => (
          <>
          <SidebarItem key={index} item={item} openSidebar={openSidebar} />
       <hr className="opacity-30"/>
          </>
        ))}
      </div>
     
    </div>
  );
}
