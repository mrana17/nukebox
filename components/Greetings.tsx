import styles from "../styles/Greetings.module.css";

type Props = {
  name: string;
};

export default function Greetings(props: Props) {
  return (
    <p>
      Hello, <span className={styles.name}>{props.name}</span>
    </p>
  );
}
