import Link from "next/link";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

export default function SidebarItem({ item, openSidebar }: any) {
  const [open, setOpen] = useState(false);

  if (item.childrens) {
    return (
      <div
        className={
          open
            ? "sidebar-item open transition-all duration-1000 ease-in-out"
            : "sidebar-item"
        }
      >
        <div
          onClick={() => setOpen(!open)}
          className={`sidebar-title hover:text-megamind_red cursor-pointer  ${
            open
              ? " text-megamind_red font-bold text-3xl transition-all duration-300 ease-in-out"
              : "transition-all duration-300 ease-in-out"
          } `}
        >
          <span>
            {item.icon && <i className={item.icon}></i>}
            {item.title}
          </span>
          
          <i className="toggle-btn flex items-center justify-center">
            <AiFillCaretDown />
          </i>
        </div>
        
        {open && <hr className="opacity-50 border-megamind_red mx-4" />}
        <div className="sidebar-content">
          {item.childrens.map((child: any, index: number) => (
            <>
              <SidebarItem key={index} item={child} />
              
            </>
          ))}
         
        </div>
      </div>
    );
  } else {
    return (
      <Link
        onClick={() => openSidebar(false)}
        href={item.path || "#"}
        className={`sidebar-item plain hover:text-megamind_red text-[12px]`}
      >
        {item.icon && <i className={item.icon}></i>}
        {item.title}
      </Link>
    );
  }
}
