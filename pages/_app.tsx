// pages/_app.tsx
import React, { useState } from "react";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import UserContext from "../context/UserContext";
import CandidatContext from "../context/CandidatContext";
import "../styles/globals.css";
import { UserInterface } from "@/interface/UserInterface";
import { CandidatInterface } from "@/interface/CandidatInterface";

function MyApp({ Component, pageProps }: AppProps) {
  const isHomePage = Component.name === "Home";
  const [user, setUser] = useState<UserInterface | null>(null);
  const [candidat, setCandidat] = useState<CandidatInterface | null>(null);

  // Wrap the component with the UserContext and CandidatContext providers
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <CandidatContext.Provider value={{ candidat, setCandidat }}>
        {isHomePage ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </CandidatContext.Provider>
    </UserContext.Provider>
  );
}

export default MyApp;
