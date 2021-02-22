import styles from "../styles/SongsElement.module.css";

type Props = {
  title: string;
  interpret: string;
  imgSrc: string;
};

export default function SongsElement({ imgSrc, title, interpret }: Props) {
  return (
    <li className={styles.songsElement}>
      <img className={styles.image} src={imgSrc} />
      <h3 className={styles.title}>{title}</h3>
      <h5 className={styles.interpret}>{interpret}</h5>
    </li>
  );
}
