// pages/register.tsx
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Register.module.css";
import { registerCandidate } from "../services/__mocks__/registerCandidateService"; // Assurez-vous que le chemin d'importation est correct
import Layout from "../components/Layout";

export default function Register() {
  const [formData, setFormData] = useState({
    nationalId: "",
    fullName: "",
    email: "",
    party: "",
    ethAddress: "", // Ajoutez un état pour l'adresse Ethereum
  });

  const router = useRouter();

  // Mettre à jour l'état avec les données du formulaire
  function handleChange(event: { target: { name: any; value: any } }) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  // Fonction pour gérer l'inscription
  async function handleRegister(event: { preventDefault: () => void }) {
    event.preventDefault();
    console.log("FormData:", formData);

    const response = await registerCandidate(formData);

    if (response.success) {
      console.log("Inscription réussie avec l'ID:", response.candidateId);
      // Rediriger l'utilisateur vers la page account.candidat.tsx
      router.push("/account.candidat"); // Utilisez la méthode push de useRouter pour rediriger
    } else {
      alert("WE HAVE A PROBLEM HERE GUYS");
      // Gérer l'échec de l'inscription ici
    }
  }

  return (
    <>
      <Head>
        <title>Inscription Candidat - DApp de Vote</title>
        <meta
          name="description"
          content="Inscrivez-vous pour devenir candidat et déposez 1 ETH comme garantie."
        />
      </Head>
      <div className={styles.registerContainer}>
        <h1 className={styles.title}>Inscription des Candidats</h1>
        <form className={styles.registerForm} onSubmit={handleRegister}>
          <label htmlFor="string">Numéro national d'électeur</label>
          <input type="string" id="nationalId" name="nationalId" required />

          <label htmlFor="fullName">Nom complet</label>
          <input type="text" id="fullName" name="fullName" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="party">Parti politique</label>
          <input type="text" id="party" name="party" required />

          <label htmlFor="ethAddress">Adresse Ethereum</label>
          <input
            type="text"
            id="ethAddress"
            name="ethAddress"
            value={formData.ethAddress}
            onChange={handleChange}
            required
          />

          <button type="submit" className={styles.registerButton}>
            Déposer 1 ETH et S'inscrire
          </button>
        </form>
      </div>
    </>
  );
}

// Appliquer le composant Layout à la page d'inscription.
Register.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
