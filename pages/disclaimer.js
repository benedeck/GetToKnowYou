import styles from "../styles/Disclaimer.module.css";
import Link from 'next/link';

function DisclaimerPage() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>Guide & Disclaimer</h1>
        <div className={styles.list}>
          <ul>
            <li>
              Make sure you and your partner are comfortable with sharing
              personal thoughts and feelings with each other.
            </li>
            <li>
              Find a time when you and your partner have at least 45 minutes
              free and are able to meet in person.
            </li>
            <li>
              This set of questions was made by Berkeley University of
              California.
            </li>
          </ul>
        </div>
        <div className={styles.buttons}>
          <div className={styles.button}>Jump to...</div>
          <Link passHref href="/game">
            <a className={styles.button}>Start</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DisclaimerPage;
