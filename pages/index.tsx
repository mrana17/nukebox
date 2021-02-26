import Head from "next/head";
import { useEffect, useState } from "react";
import Greetings from "../components/Greetings";
import styles from "../styles/Home.module.css";
import { APISong, getSongs } from "../utils/api";
import ViewsCount from "../components/ViewsCount";
import useLocalStorage from "../hooks/useLocalsStorage";
import SongItemList from "../components/SongItemList";

export default function Home() {
  const [songs, setSongs] = useState<APISong[]>([]);
  const [favoriteSongIds] = useLocalStorage<string[]>("favoriteSongs", []);

  useEffect(() => {
    getSongs().then((newSongs) => {
      setSongs(newSongs);
    });
  }, []);

  // const songsElements = songs.map((song) => (
  //   <Link href={`/songs/${song.id}`} key={song.id}>
  //     <a>
  //       <SongsElement
  //         key={`${song.title}-${song.interpret}`}
  //         imgSrc={song.imgSrc}
  //         title={song.title}
  //         interpret={song.interpret}
  //       />
  //     </a>
  //   </Link>
  // ));

  const favoriteSongs = songs.filter((song) =>
    favoriteSongIds.includes(song.id)
  );

  const notFavoriteSongs = songs.filter(
    (song) => !favoriteSongIds.includes(song.id)
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Nukebox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Nukebox</h1>
      <Greetings name="MARK" />
      <ViewsCount />
      <h1>Favorite Songs</h1>
      <SongItemList items={favoriteSongs} />
      <h1>Songs</h1>
      <SongItemList items={notFavoriteSongs} />
    </div>
  );
}
