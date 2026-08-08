import Link from "next/link";
import styles from "./page.module.css";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
        </li>
        <li>
          <Link href="/gallery" className={styles.navLink}>
            Gallery
          </Link>
        </li>
        <li>
          <Link href="/contacts" className={styles.navLink}>
            Contacts
          </Link>
        </li>
        <li>
          <Link href="/resume-builder" className={styles.navLink}>
            Try my resume Builder
          </Link>
        </li>
      </ul>
    </nav>
  );
}
