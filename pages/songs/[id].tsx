import { useRouter } from "next/Router";
import { useEffect, useState } from "react";
import { APISong, getSong } from "../../utils/api";
import styles from "../../styles/SongPage.module.css";
import SongDetails from "../../components/SongDetails";
import AudioPlayer from "../../components/AudioPlayer";
import HeaderNav from "../../components/HeaderNav";

export default function Songs() {
  const router = useRouter();
  const { id } = router.query;
  const [song, setSong] = useState<APISong>(null);

  useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
    getSong(id).then((newSong) => {
      setSong(newSong);
    });
  }, [id]);

  if (!song) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.container}>
      <header>
        <HeaderNav />
      </header>
      <main>
        <SongDetails
          title={song.title}
          interpret={song.interpret}
          imgSrc={song.imgSrc}
        />
      </main>
      <footer>
        <AudioPlayer audio={song.audio} />
      </footer>
    </div>
  );
}
