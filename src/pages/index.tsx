import Section3Card from "components/home/cards/Section3Card";
import Section10 from "components/home/Section10";
import Section11 from "components/home/Section11";
import Section12 from "components/home/Section12";
import Section2 from "components/home/Section2";
import Section3 from "components/home/Section3";
import Section4 from "components/home/Section4";
import Section5 from "components/home/Section5";
import Section6 from "components/home/Section6";
import Section7 from "components/home/Section7";
import Section8 from "components/home/Section8";
import Section9 from "components/home/Section9";
import Head from "next/head";
import CTA from "../../components/cta/CTA";

export default function Home() {
  return (
    <>
      <Head>
        <title>megamind | Home</title>
      </Head>
      <section>
        <CTA />
      </section>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      {/* <Section6 /> */}
      <Section7 />
      {/* <Section8 /> */}
      {/* <Section9 />
      <Section10 /> */}
      {/* <Section11 />
      <Section12 /> */}
    </>
  );
}
