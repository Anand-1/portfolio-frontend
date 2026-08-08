import styles from './page.module.css';
export default function Contacts() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Contact Me</h1>
        <p className={styles.description}>
          Feel free to reach out to me via email or connect with me on social media.
        </p>
        <div className={styles.contactInfo}>
          <p>Email: <a href="mailto:anandrajj10@gmail.com" className={styles.contactLink}>
            anandrajj10@gmail.com
          </a></p>
        </div>
      </div>
    </div>
  );
}
