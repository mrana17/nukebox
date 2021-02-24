import { useRouter } from "next/Router";
import { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalsStorage";
import styles from "../styles/AudioPlayer.module.css";

type Props = {
  audio: string;
};

export default function AudioPlayer({ audio }: Props) {
  const router = useRouter();
  const { id } = router.query;
  const [favoriteSongs, setFavoriteSongs] = useLocalStorage(
    "favoriteSongs",
    []
  );
  const favorite = favoriteSongs.includes(id);

  useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
  }, [id]);

  const handleFavoriteClick = () => {
    if (favorite) {
      const newFavoriteSongs = favoriteSongs.filter(
        (favoriteSongs) => favoriteSongs !== id
      );
      setFavoriteSongs(newFavoriteSongs);
    } else {
      setFavoriteSongs([...favoriteSongs, id]);
    }
  };

  return (
    <figure className={styles.audioFigure}>
      <button className={styles.favoriteButton} onClick={handleFavoriteClick}>
        {favorite ? "❤️" : "🖤"}
      </button>
      <figcaption className={styles.playerText}> Listen to Music</figcaption>
      <audio controls src={audio} className={styles.audioPlayer}>
        Your browser does not support<code>Audio</code> element
      </audio>
    </figure>
  );
}
