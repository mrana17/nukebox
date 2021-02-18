import Head from "next/head";
import { useEffect, useState } from "react";
import Greetings from "../components/Greetings";
import SongsElement from "../components/SongElement";
import styles from "../styles/Home.module.css";
import { APISong, getSongs } from "../utils/api";
import Link from "next/link";

export default function Home() {
  const [songs, setSongs] = useState<APISong[]>([]);

  useEffect(() => {
    console.log("Homepage is mounted");
    getSongs().then((newSongs) => {
      setSongs(newSongs);
    });

    // alternative: async function doFetch() {
    //   const newSongs = await getSongs();
    //   setSongs(newSongs);
    // }
    // doFetch()
  }, []);

  const songsElements = songs.map((song) => (
    <Link href={`/songs/${song.id}`} key={song.id}>
      <a>
        <SongsElement
          key={`${song.title}-${song.interpret}`}
          imgSrc={song.imgSrc}
          title={song.title}
          interpret={song.interpret}
        />
      </a>
    </Link>
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
