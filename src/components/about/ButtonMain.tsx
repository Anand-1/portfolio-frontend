'use client';
import styles from "./ButtonMain.module.css";
export default function ButtonMain() {
  return (
    <button
      className={styles.button}
      onClick={() => console.log("Contact button clicked")}
    >
      Contact Me
    </button>
  );
}