// pages/index.tsx
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DApp de Vote</title>
        <meta name="description" content="DApp de Vote Décentralisé" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Image
          src="/vote_index_02.png"
          alt="Illustration de vote"
          width={900}
          height={250}
          priority // Helps with loading the image during SSR
        />
        <h1 className={styles.title}>Bienvenue sur la DApp de Vote</h1>
        <p className={styles.description}>
          Un système de vote sécurisé et décentralisé
        </p>

        <div className={styles.grid}>
          <a href="/candidate/scrutin" className={styles.card}>
            <h2>Candidates &rarr;</h2>
            <p>Inscrivez-vous pour devenir un candidate.</p>
          </a>

          <a href="/elector/login" className={styles.card}>
            <h2>Electeurs &rarr;</h2>
            <p>Connectez-vous pour voter.</p>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>Powered by VascoII</footer>
    </div>
  );
}
