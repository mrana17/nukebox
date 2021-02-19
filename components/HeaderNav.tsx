import styles from "../styles/HeaderNav.module.css";

export default function HeaderNav() {
  return (
    <div className={styles.headerContainer}>
      <button className={styles.topButton} onClick={() => history.back()}>
        ⬅
      </button>
      <h5 className={styles.headerText}>Now Playing</h5>
      <button className={styles.topButton} onClick={() => history.forward()}>
        ➡
      </button>
    </div>
  );
}
