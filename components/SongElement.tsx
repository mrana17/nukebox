import styles from "../styles/SongsElement.module.css";

type Props = {
  title: string;
  interpret: string;
};

export default function SongsElement(props: Props) {
  return (
    <article>
      <div>
        <img />
      </div>
      <div>
        <h3 className={styles.title}>{props.title}</h3>
        <h5 className={styles.interpret}>{props.interpret}</h5>
      </div>
    </article>
  );
}
