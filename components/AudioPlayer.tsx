import styles from "../styles/AudioPlayer.module.css";

type Props = {
  audio: string;
};

export default function AudioPlayer({ audio }: Props) {
  return (
    <figure className={styles.audioFigure}>
      <figcaption className={styles.playerText}> Listen to Music</figcaption>
      <audio controls src={audio} className={styles.AudioPlayer}>
        Your browser does not support<code>Audio</code> element
      </audio>
    </figure>
  );
}
