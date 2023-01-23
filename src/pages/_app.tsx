import "../styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import Layout from "components/Layout/Layout";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}
