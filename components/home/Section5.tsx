import { initAOS } from "@/utils/aos";
import AboutSection6 from "components/About/AboutSection6";
import React, { useEffect } from "react";

function Section5() {
  useEffect(() => {
    initAOS();
  }, []);
  return (
    <div className=" py-16 dark:bg-megamind_black lg:mt-[-80px]">
      <div>
        <AboutSection6 />
      </div>
    </div>
  );
}

export default Section5;
