// pages/login.tsx
import Head from "next/head";
import styles from "../styles/Login.module.css"; // Assurez-vous de créer ce module CSS pour la page de connexion
import Layout from "@/components/Layout";

export default function Login() {
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
        <form className={styles.loginForm}>
          <label htmlFor="string">Numéro national d'électeur</label>
          <input type="string" id="string" name="string" required />

          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" name="password" required />

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
