// pages/register.tsx
import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Register.module.css"; // Créez ce module CSS pour la page d'inscription
import Layout from "@/components/Layout";

export default function Register() {
  const [formData, setFormData] = useState({
    nationalId: "",
    fullName: "",
    email: "",
    party: "",
  });

  // Mettre à jour l'état avec les données du formulaire
  function handleChange(event: { target: { name: any; value: any } }) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  // Fonction pour gérer l'inscription et le dépôt
  async function handleRegister(event: { preventDefault: () => void }) {
    event.preventDefault();
    // Intégrer la logique pour interagir avec le smart contract ici
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
        <form className={styles.registerForm}>
          <label htmlFor="string">Numéro national d'électeur</label>
          <input type="string" id="nne" name="nne" required />

          <label htmlFor="fullName">Nom complet</label>
          <input type="text" id="fullName" name="fullName" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="party">Parti politique</label>
          <input type="text" id="party" name="party" required />

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
