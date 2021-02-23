import { useRouter } from "next/Router";
import { useEffect, useState } from "react";
import styles from "../styles/AudioPlayer.module.css";

type Props = {
  audio: string;
};

export default function AudioPlayer({ audio }: Props) {
  const router = useRouter();
  const { id } = router.query;
  const [favorite, setFavorite] = useState(null);

  useEffect(() => {
    if (typeof id !== "string" || favorite === null) {
      return;
    }
    if (favorite) {
      localStorage.setItem("favoriteSong", id);
    }
    if (!favorite) {
      localStorage.removeItem("favoriteSong");
    }
  }, [favorite]);

  useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
    setFavorite(id === localStorage.getItem("favoriteSong"));
  }, [id]);

  return (
    <figure className={styles.audioFigure}>
      <button
        className={styles.favoriteButton}
        onClick={() => setFavorite(!favorite)}
      >
        {favorite ? "❤️" : "🖤"}
      </button>
      <figcaption className={styles.playerText}> Listen to Music</figcaption>
      <audio controls src={audio} className={styles.audioPlayer}>
        Your browser does not support<code>Audio</code> element
      </audio>
    </figure>
  );
}
