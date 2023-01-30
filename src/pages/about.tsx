import AboutSection1 from "components/Aboute/AboutSection1";
import Banner from "components/Aboute/Banner";
import Head from "next/head";
import React from "react";

function about() {
  return (
    <>
      <Head>
        <title>megamind | About</title>
      </Head>
      <div>
        <Banner />
        <AboutSection1 />
      </div>
    </>
  );
}

export default about;
