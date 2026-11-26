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
          <p>Phone: <a href="tel:+1234567890" className={styles.contactLink}>
            +1 (234) 567-890
          </a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/anandrajj10" className={styles.contactLink} target="_blank" rel="noopener noreferrer">
            linkedin.com/in/anandrajj10
          </a></p>
          <p>GitHub: <a href="https://github.com/anandrajj10" className={styles.contactLink} target="_blank" rel="noopener noreferrer">
            github.com/anandrajj10
          </a></p>
          <p>Twitter: <a href="https://twitter.com/anandrajj10" className={styles.contactLink} target="_blank" rel="noopener noreferrer">
            twitter.com/anandrajj10
          </a></p>
        </div>
      </div>
    </div>
  );
}
