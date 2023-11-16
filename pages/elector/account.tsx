// pages/account.elector.tsx
import Head from "next/head";
import styles from "../../styles/elector/Account.module.css"; // Créez ce fichier CSS pour styliser votre page
import Layout from "../../components/Layout";
import React, { useState, useEffect, useContext } from "react";
import ElectorContext from "../../context/elector/ElectorContext";
import { useRouter } from "next/router";

export default function AccountElector() {
  const electorContext = useContext(ElectorContext);
  const router = useRouter();

  if (!electorContext) {
    console.error("ElectorContext not available");
    return null;
  }

  const { elector } = electorContext;
  const [elections, setElections] = useState([]);
  const [selectedElection, setSelectedElection] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  useEffect(() => {
    // Placeholder for fetching elections data
    // setElections(fetchElectionsData());
  }, []);

  const handleLogout = () => {
    // Handle elector logout logic here
    // Possibly clear context or token storage and redirect to home
    router.push("/");
  };

  const handleElectionClick = (electionId: number) => {
    // Fetch candidates for the selected election
    // setCandidates(fetchCandidates(electionId));
    //setSelectedElection(electionId);
  };

  const handleCandidateValidation = (candidateId: number) => {
    // Placeholder for candidate validation logic
    //setSelectedCandidate(candidateId);
  };

  return (
    <>
      <Head>
        <title>Mon compte électeur</title>
      </Head>
      <div className={styles.accountContainer}>
        <div className={styles.electorInfo}>
          <h2>
            Bonjour {elector?.firstName} {elector?.lastName}
          </h2>
          <p>Identifiant national: {elector?.nationalId}</p>
          <button className={styles.button} onClick={handleLogout}>
            Déconnexion
          </button>
        </div>
        <div className={styles.electionsContainer}>
          <h3 className={styles.h3}>Elections</h3>
          {elections.map((election) => (
            <div
              key={/**election.id*/ 1}
              className={styles.electionItem}
              onClick={() => handleElectionClick(/**election.id*/ 1)}
            >
              {/**election.name*/ "election.name"}
            </div>
          ))}
        </div>
        <div className={styles.candidatesContainer}>
          <h3 className={styles.h3}>Candidates</h3>
          {candidates.map((candidate) => (
            <div key={/**candidate.id*/ 1} className={styles.candidateItem}>
              {/**candidate.name*/ "candidate.name"}
              <button
                className={styles.button}
                onClick={() => handleCandidateValidation(/**candidate.id*/ 1)}
              >
                Valider
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// Cette fonction sert à appliquer le composant Layout à la page de elector account.
AccountElector.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
