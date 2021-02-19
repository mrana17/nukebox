import { useRouter } from "next/Router";
import { useEffect, useState } from "react";
import { APISong, getSong } from "../../utils/api";
import styles from "../../styles/SongPage.module.css";

export default function Songs() {
  const router = useRouter();
  const { id } = router.query;

  const [song, setSong] = useState<APISong>(null);

  useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
    console.log("Song");
    getSong(id).then((newSong) => {
      setSong(newSong);
    });
  }, [id]);

  if (!song) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.container}>
      <button className={styles.topButton}>⬅</button>
      <h5>Now PLaying</h5>
      <p>Title: {song.title}</p>
      <p>Interpret: {song.interpret}</p>
      <img className={styles.image} src={song.imgSrc} />
    </div>
  );
}
