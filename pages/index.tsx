import Head from "next/head";
import Greetings from "../components/Greetings";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nukebox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Nukebox</h1>
        <Greetings name="JAN" />
      </main>
    </div>
  );
}
