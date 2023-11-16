// pages/login.tsx
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { loginElector } from "../../services/gouv/elector/loginService";
import styles from "../../styles/elector/Login.module.css"; // Assurez-vous de créer ce module CSS pour la page de connexion
import Layout from "../../components/Layout";
import ElectorContext from "../../context/elector/ElectorContext";
import React, { useContext } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    nationalId: "",
    password: "",
  });

  const router = useRouter();

  const electorContext = useContext(ElectorContext);

  // Mettre à jour l'état avec les données du formulaire
  function handleChange(event: { target: { name: any; value: any } }) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  // Gestion de la soumission du formulaire de login elector
  async function handleLogin(event: { preventDefault: () => void }) {
    event.preventDefault();
    console.log("FormData:", formData);

    const response = await loginElector(formData);

    if (response.success) {
      console.log("Login réussie avec l'ID:", response.elector.nationalId);
      electorContext?.setElector(response.elector);
      // Rediriger l'utilisateur vers la page account.elector.tsx
      router.push("/elector/account"); // Utilisez la méthode push de useRouter pour rediriger
    } else {
      alert("WE HAVE A LOGIN PROBLEM HERE GUYS");
      // Gérer l'échec du login elector ici
    }
  }

  return (
    <>
      <Head>
        <title>Connexion - DApp de Vote</title>
        <meta
          name="description"
          content="Connectez-vous pour accéder à la DApp de Vote"
        />
      </Head>
      <div className={styles.loginContainer}>
        <h1 className={styles.title}>Connexion</h1>
        <form className={styles.loginForm} onSubmit={handleLogin}>
          <label htmlFor="string">Numéro national d'électeur</label>
          <input
            type="string"
            id="nationalId"
            name="nationalId"
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            required
          />

          <button type="submit" className={styles.loginButton}>
            Se connecter
          </button>
        </form>
      </div>
    </>
  );
}

// Cette fonction sert à appliquer le composant Layout à la page de connexion.
Login.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
