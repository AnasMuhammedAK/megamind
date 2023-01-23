import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>megamind | Home</title>
      </Head>
      <div className="h-screen w-full flex items-center justify-center text-4xl  dark:text-megamind_white">
        Home Page
      </div>
    </>
  );
}
