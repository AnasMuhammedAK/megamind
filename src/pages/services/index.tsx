import AboutSection3 from "components/About/AboutSection3";
import AboutSection6 from "components/About/AboutSection6";
import Banner from "components/About/Banner";
import Services from "components/About/Services";
import Section10 from "components/home/Section10";
import Section12 from "components/home/Section12";
import Section7 from "components/home/Section7";
import Head from "next/head";
import React from "react";

function ServicesPage() {
  return (
    <>
      <Head>
        <title>megamind | Services</title>
      </Head>
      <Banner pageName={"Services"} />
      <div className="pt-20 pb-16 dark:bg-megamind_black">
        <Services />
      </div>
      <div className="dark:bg-megamind_black">
        <AboutSection6 />
      </div>
      <AboutSection3 />
      <Section7 />
      <Section10 />
      <Section12 />
    </>
  );
}

export default ServicesPage;
