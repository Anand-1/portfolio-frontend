'use client';

import Link from "next/link";
import { useState } from 'react';
import styles from './Navigation.module.css';
import { useExportUsers } from '@/hooks/useExportUsers';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { isExporting, exportMessage, exportError, exportUsers } = useExportUsers();

  return (
    <nav className={styles.nav} aria-label="Primary navigation">
      <Link href="/" className={styles.brandMark} onClick={() => setIsOpen(false)}>
        Anand Raj
      </Link>

      <button
        type="button"
        className={styles.menuToggle}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="primary-navigation-links"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul id="primary-navigation-links" className={`${styles.navList} ${isOpen ? styles.navListOpen : ''}`}> 
        <li>
          <Link href="/about" className={styles.navLink} onClick={() => setIsOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link href="/contacts" className={styles.navLink} onClick={() => setIsOpen(false)}>
            Contacts
          </Link>
        </li>
        <li>
          <Link href="/resumebuilder" className={styles.navLink} onClick={() => setIsOpen(false)}>
            Try my resume Builder
          </Link>
        </li>
        <li>
          <Link href="/games" className={styles.navLink} onClick={() => setIsOpen(false)}>
            Try Games
          </Link>
        </li>
        <li>
          <Link href="/agency" className={styles.navLink} onClick={() => setIsOpen(false)}>
            Agency
          </Link>
        </li>
        <li>
          <Link href="/news-letter" className={styles.navLink} onClick={() => setIsOpen(false)}>
            News Letter
          </Link>
        </li>
        <li>
          <Link href="/login" className={styles.navLink} onClick={() => setIsOpen(false)}>
            Sign in
          </Link>
        </li>
        <li>
          <button
            type="button"
            className={styles.navLink}
            onClick={() => {
              setIsOpen(false);
              void exportUsers();
            }}
            disabled={isExporting}
          >
            {isExporting ? 'Exporting…' : 'Export users'}
          </button>
          {exportMessage && (
            <p className={styles.exportMessage} role={exportError ? 'alert' : 'status'}>
              {exportMessage}
            </p>
          )}
        </li>
      </ul>
    </nav>
  );
}
