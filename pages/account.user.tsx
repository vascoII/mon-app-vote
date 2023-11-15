// pages/account.user.tsx
import Head from "next/head";
import styles from "../styles/AccountUser.module.css"; // Créez ce fichier CSS pour styliser votre page
import Layout from "../components/Layout";
import React, { useState, useEffect, useContext } from "react";
import UserContext from "../context/UserContext";

export default function AccountUser() {
  const userContext = useContext(UserContext);

  if (!userContext) {
    // Gérer le cas où le contexte n'est pas disponible
    console.error("UserContext not available");
    return null;
  }

  const { user } = userContext;

  // Supposons que vous avez un état pour suivre l'élection en cours
  const [currentElection, setCurrentElection] = useState(null);

  // Supposons que vous avez un état pour suivre la candidature validée par l'utilisateur
  const [validatedCandidate, setValidatedCandidate] = useState(null);

  // Supposons que vous avez un état pour suivre le vote de l'utilisateur
  const [userVote, setUserVote] = useState(null);

  // Chargez les informations de l'utilisateur lors du montage du composant
  useEffect(() => {
    // Ici, vous devriez charger les données de l'utilisateur à partir de votre backend ou contexte d'authentification
    // setUser({ ... });
  }, []);

  /* Fonction pour valider la candidature d'un candidat
  const validateCandidate = (candidateId) => {
    // Appel API pour valider la candidature d'un candidat
    // Mettez à jour l'état avec le candidat validé
    setValidatedCandidate(candidateId);
  };

  // Fonction pour voter pour un candidat
  const voteForCandidate = (candidateId) => {
    // Appel API pour voter pour un candidat
    // Mettez à jour l'état avec le vote de l'utilisateur
    setUserVote(candidateId);
  };
  */

  return (
    <>
      <Head>
        <title>Mon compte électeur</title>
      </Head>
      <div className={styles.accountContainer}>
        <div className={styles.userInfo}>
          <h2>{`Bonjour ${user?.firstName} ${user?.lastName}`}</h2>
          <p>{`Identifiant national: ${user?.nationalId}`}</p>
        </div>
        {currentElection && (
          <div className={styles.electionSection}>
            {/* Boutons temporairement commentés jusqu'à ce que les fonctions soient décommentées
            <button onClick={() => validateCandidate(currentElection.id)}>
              Valider la candidature pour {currentElection.name}
            </button>
            <button onClick={() => voteForCandidate(currentElection.id)}>
              Voter maintenant pour {currentElection.name}
            </button>
            */}
          </div>
        )}
        <div className={styles.validationSection}>
          {validatedCandidate && (
            <p>{`Candidature validée : ${validatedCandidate}`}</p>
          )}
          {userVote && <p>{`Votre vote : ${userVote}`}</p>}
        </div>
      </div>
    </>
  );
}

// Cette fonction sert à appliquer le composant Layout à la page de connexion.
AccountUser.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
