import React from "react";
import styles from "./page.module.css";
import ButtonMain from "./ButtonMain";

export default function About() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.description}>
          I am a passionate software developer with experience in building web
          applications using modern technologies. I enjoy learning new skills and
          working on challenging projects.
        </p>
      </main>

      <ButtonMain />
    </div>
  );
}