import AboutSection1 from "components/About/AboutSection1";
import AboutSection2 from "components/About/AboutSection2";
import AboutSection3 from "components/About/AboutSection3";
import AboutSection6 from "components/About/AboutSection6";
import Banner from "components/About/Banner";
import Section10 from "components/home/Section10";
import Section12 from "components/home/Section12";
import Section7 from "components/home/Section7";
import Section8 from "components/home/Section8";
import Head from "next/head";
import React from "react";

function about() {
  return (
    <>
      <Head>
        <title>megamind | About</title>
      </Head>
      <div>
        <Banner pageName={"About As"}/>
        <AboutSection1 />
        <AboutSection2 />
        <AboutSection3 />
        {/*About Section 4 */}
        <Section8 />
        {/*About Section 4 */}
        {/*About Section 5 */}
        <AboutSection6 />
        {/* company statitics */}
        {/*About Section 5 */}
        {/*About Section 6 */}
        <Section10 />
        {/*About Section 6 */}
        {/*About Section 7 */}
        <Section7 />
        {/*About Section 7 */}
        {/*About Section 8 */}
        <Section12 />
        {/*About Section 8 */}
      </div>
    </>
  );
}

export default about;
