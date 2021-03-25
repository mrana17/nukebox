import { useRouter } from "next/Router";
import { useEffect, useRef, useState } from "react";
import useLocalStorage from "../hooks/useLocalsStorage";
import styles from "../styles/AudioPlayer.module.css";
import { deleteSong } from "../utils/api";

type Props = {
  audio: string;
};

export default function AudioPlayer({ audio }: Props) {
  const router = useRouter();
  const { id: idQuery } = router.query;
  if (!idQuery) {
    return null;
  }
  const id = typeof idQuery === "string" ? idQuery : idQuery[0];
  const [favoriteSong, setFavoriteSong] = useLocalStorage<string[]>(
    "favoriteSongs",
    []
  );
  const favorite = favoriteSong.includes(id);

  const audioRef = useRef(new Audio(audio));
  const [isPlaying, setIsPlaying] = useState(false);
  const audioElement = audioRef.current;
  const intervalRef = useRef<NodeJS.Timeout>();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      audioElement.play();
      intervalRef.current = setInterval(() => {
        setProgress(audioElement.currentTime);
      }, 2000);
    } else {
      clearInterval(intervalRef.current);
      audioElement.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
  }, [id]);

  const handleFavoriteClick = () => {
    if (favorite) {
      const newFavoriteSong = favoriteSong.filter(
        (favoriteSongs) => favoriteSongs !== id
      );
      setFavoriteSong(newFavoriteSong);
    } else {
      setFavoriteSong([...favoriteSong, id]);
    }
  };

  const handleDeleteClick = async () => {
    await deleteSong(id);
    router.back();
  };

  return (
    <figure className={styles.audioFigure}>
      <button className={styles.favoriteButton} onClick={handleFavoriteClick}>
        {favorite ? "❤️" : "🖤"}
      </button>
      <button onClick={handleDeleteClick}>🗑</button>
      <button className={styles.btn} onClick={() => setIsPlaying(!isPlaying)}>
        <img src={isPlaying ? "/pause.svg" : "/play.svg"} />
      </button>
      <input
        className={styles.duration}
        type="range"
        min="0"
        max={audioElement.duration}
        value={progress}
      />
      <figcaption className={styles.playerText}> Listen to Music</figcaption>
      <audio controls src={audio} className={styles.audioPlayer}>
        Your browser does not support<code>Audio</code> element
      </audio>
    </figure>
  );
}
