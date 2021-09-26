import styles from "../styles/EndPage.module.css";
import { useRouter } from "next/router";

function EndPage() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.main} onClick={() => router.push("/")}>
        <h1>You have finished our set of questions! Thanks for your time!</h1>
      </div>
    </div>
  );
}

export default EndPage;
