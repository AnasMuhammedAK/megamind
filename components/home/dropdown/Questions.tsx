import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { IoIosArrowDown } from "react-icons/io";

function Questions() {
  const titles = [
    "What is Digital Solutions",
    "How to Improve your Business",
    "What is the standard size of business cards",
    "What should be listed business card",
    "What is Digital Solutions",
    "How to Improve your Business",
    "What is the standard size of business cards",
    "What should be listed business card",
  ];
  return (
    <div>
      {titles.map((title, index) => {
        return (
          <>
            <Accordion key={index} className="mt-2 ">
              <AccordionSummary
                expandIcon={
                  <IoIosArrowDown className="hover:text-[#213557] dark:text-megamind_red/90 text-megamind_black/70 text-xl" />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="bg-megamind_black/10 dark:bg-megamind_black/95 text-black"
              >
                <Typography className="dark:text-white font-bold texl-xl">{title}?</Typography>
              </AccordionSummary>
              <AccordionDetails className="dark:bg-megamind_black/95 bg-megamind_black/10 font-Red_Hat_Display dark:text-white">
                On the other hand we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment so blinded by desire
              </AccordionDetails>
            </Accordion>
            
          </>
        );
      })}
    </div>
  );
}

export default Questions;
