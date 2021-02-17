import Head from "next/head";
import Greetings from "../components/Greetings";
import SongsElement from "../components/SongElement";
import styles from "../styles/Home.module.css";

export default function Home() {
  const songs = [
    {
      imgSrc: "/disc1.jpg",
      title: "Changes",
      interpret: "TuPac",
    },
    { imgSrc: "/disc1.jpg", title: "Hot in Here", interpret: "Nelly" },
    { imgSrc: "/disc1.jpg", title: "I Need a Girl", interpret: "P.Diddy" },
    {
      imgSrc: "/disc1.jpg",
      title: "Family Affairs",
      interpret: "Mary J Blidge",
    },
  ];

  const songsElements = songs.map((song) => (
    <SongsElement
      key={`${song.title}-${song.interpret}`}
      imgSrc={song.imgSrc}
      title={song.title}
      interpret={song.interpret}
    />
  ));
  return (
    <div className={styles.container}>
      <Head>
        <title>Nukebox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Nukebox</h1>
      <Greetings name="MARK" />
      <ul className={styles.list}>{songsElements}</ul>
    </div>
  );
}
