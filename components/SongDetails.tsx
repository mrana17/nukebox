import styles from "../styles/SongDetails.module.css";

type Props = {
  imgSrc: string;
  title: string;
  interpret: string;
};
export default function SongDetails({ imgSrc, title, interpret }: Props) {
  return (
    <div className={styles.songDetails}>
      <img className={styles.img} src={imgSrc} alt="" />
      <div>
        {title} - {interpret}
      </div>
    </div>
  );
}
