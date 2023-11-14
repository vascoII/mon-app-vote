// pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const isHomePage = Component.name === "Home";

  return isHomePage ? (
    <Component {...pageProps} />
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
