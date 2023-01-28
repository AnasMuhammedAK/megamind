import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Collapse } from "react-collapse";

function Questions2({ open, togle, question, answer }: any) {
  return (
    <>
      <div
        className={`cursor-pointer    ${
          open && "bg-megamind_white dark:bg-megamind_black rounded-md py-4"
        }`}
      >
        <div
          className={`py-2 px-4 flex justify-between items-center`}
          onClick={togle}
        >
          <p
            className={`text-xl text-megamind_black dark:text-megamind_white `}
          >
            {question}
          </p>
          <div>
            {open ? (
              <IoIosArrowUp className="hover:text-[#213557] dark:text-megamind_red/90 text-megamind_black/70 text-xl" />
            ) : (
              <IoIosArrowDown className="hover:text-[#213557] dark:text-megamind_red/90 text-megamind_black/70 text-xl" />
            )}
          </div>
        </div>
        <Collapse isOpened={open}>
          <hr className="mx-4 border border-megamind_black dark:border-megamind_red opacity-50" />
          <div className="mx-4 py-8 text-megamind_black/70 dark:text-megamind_white/70">
            {answer}
          </div>
        </Collapse>
      </div>
      {!open && (
        <hr className="mx-2 mb-8 border border-megamind_black dark:border-megamind_white opacity-10" />
      )}
    </>
  );
}

export default Questions2;
