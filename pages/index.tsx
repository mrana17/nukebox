import Head from "next/head";
import Greetings from "../components/Greetings";
import SongsElement from "../components/SongElement";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nukebox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <header>
          <h1>Nukebox</h1>
          <Greetings name="JAN" />
        </header>
        <main>
          <SongsElement title="Titel" interpret="Interpret" />
        </main>
      </body>
    </div>
  );
}
