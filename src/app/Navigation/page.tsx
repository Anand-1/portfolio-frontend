import Link from "next/link";
import styles from "./page.module.css";
import Buttons from "../components/buttons/Buttons";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Link href="/" className={styles.navLink}>
            <Buttons buttonText="Home" />
          </Link>
        </li>
        <li>
          <Link href="/about" className={styles.navLink}>
            <Buttons buttonText="About" />
          </Link>
        </li>
        <li>
          <Link href="/gallery" className={styles.navLink}>
            <Buttons buttonText="Gallery" />
          </Link>
        </li>
        <li>
          <Link href="/contact" className={styles.navLink}>
            <Buttons buttonText="Contact" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
