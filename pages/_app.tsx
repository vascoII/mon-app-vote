// pages/_app.tsx
import React, { useState } from "react";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import ElectorContext from "../context/elector/ElectorContext";
import CandidateContext from "../context/candidate/CandidateContext";
import { ElectorInterface } from "@/interface/ElectorInterface";
import { CandidateInterface } from "@/interface/CandidateInterface";

function MyApp({ Component, pageProps }: AppProps) {
  const isHomePage = Component.name === "Home";
  const [elector, setElector] = useState<ElectorInterface | null>(null);
  const [candidate, setCandidate] = useState<CandidateInterface | null>(null);

  // Wrap the component with the ElectorContext and CandidateContext providers
  return (
    <ElectorContext.Provider value={{ elector, setElector }}>
      <CandidateContext.Provider value={{ candidate, setCandidate }}>
        {isHomePage ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </CandidateContext.Provider>
    </ElectorContext.Provider>
  );
}

export default MyApp;
