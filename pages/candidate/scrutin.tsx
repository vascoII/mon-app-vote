// pages/scrutins.tsx
import Head from "next/head";
import Layout from "../../components/Layout";
import styles from "../../styles/election/Scrutin.module.css";
import { getAllScrutin } from "@/services/gouv/election/scrutinService";
import { ScrutinInterface } from "@/interface/ScrutinInterface";
import router from "next/router";

// Define props interface if you are using TypeScript
interface ScrutinsPageProps {
  scrutins: ScrutinInterface[];
}

function registerAsCandidate(id: number) {
  router.push(`/candidate/register?election=${id}`);
}

export default function Scrutins({ scrutins }: ScrutinsPageProps) {
  return (
    <>
      <Head>
        <title>Scrutins</title>
      </Head>
      <div className={styles.container}>
        {scrutins.map((scrutin) => (
          <div key={scrutin.id} className={styles.card}>
            <img
              src={scrutin.image}
              alt={scrutin.title}
              className={styles.electionImage}
            />
            <h3>{scrutin.title}</h3>
            <p>{scrutin.description}</p>
            <button
              className={styles.cardButton}
              onClick={() => registerAsCandidate(scrutin.id)}
            >
              →
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

// This will fetch data at build time if you are using static generation
export async function getStaticProps() {
  const response = await getAllScrutin();
  return {
    props: {
      scrutins: response.success ? response.scrutins : [],
    },
    revalidate: 10, // In seconds, if you want to revalidate the data periodically
  };
}

// Use this if you need to fetch data on each request
// export async function getServerSideProps() {
//   const response = await getAllScrutin();
//   return {
//     props: {
//       scrutins: response.success ? response.scrutins : [],
//     },
//   };
// }

// Apply the Layout component to the page
Scrutins.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
