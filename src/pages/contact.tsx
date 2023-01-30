import Banner from "components/About/Banner";
import ContactAs from "components/contact/ContactAs";
import GoogleMap from "components/contact/GoogleMap";
import Head from "next/head";
import React from "react";

function contact() {
  return (
    <>
      <Head>
        <title>megamind | Contact</title>
      </Head>
      <Banner pageName={"Contact As"} />
      <GoogleMap />
      <ContactAs />
    </>
  );
}

export default contact;
