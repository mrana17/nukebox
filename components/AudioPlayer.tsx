import { useRouter } from "next/Router";
import { useEffect, useRef, useState } from "react";
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
