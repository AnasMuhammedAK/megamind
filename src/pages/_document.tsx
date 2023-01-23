import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/x-icon" href="/images/favicon-red.png" />
      </Head>
      <body className="scrollbar-main font-Lexend">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
