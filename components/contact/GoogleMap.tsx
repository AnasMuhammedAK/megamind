import { initAOS } from "@/utils/aos";
import React, { useEffect } from "react";

function GoogleMap() {
  useEffect(() => {
    initAOS();
  }, []);
  return (
    <div className="dark:bg-megamind_black w-full  2xl:px-[350px] px-4 md:px-10 lg:px-20 xl:px-64 pb-16 pt-28">
      <iframe
        data-aos="zoom-in-up"
        loading="lazy"
        allowFullScreen
        width={"100%"}
        height={"600px"}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.6377309214704!2d74.92339831403413!3d12.866659290924787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba359dd41074ec7%3A0x423a61ac00534018!2sSAHYADRI%20COLLEGE!5e0!3m2!1sen!2sus!4v1573118356037!5m2!1sen!2sus"
        frameBorder="0"
      ></iframe>
    </div>
  );
}

export default GoogleMap;
