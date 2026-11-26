'use client';

import styles from './CVHeader.module.css';
import { cvData } from '@/data/cv';

export default function CVHeader() {
  const { name, title, contact } = cvData.header;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.titleSection}>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.title}>{title}</p>
        </div>
        <div className={styles.contactSection}>
          <a href={`mailto:${contact.email}`} className={styles.contactItem}>
            <span className={styles.icon}>📧</span>
            {contact.email}
          </a>
          <a href={`tel:${contact.phone}`} className={styles.contactItem}>
            <span className={styles.icon}>📱</span>
            {contact.phone}
          </a>
          <div className={styles.contactItem}>
            <span className={styles.icon}>📍</span>
            {contact.location}
          </div>
          <a 
            href={contact.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.contactItem}
          >
            <span className={styles.icon}>🔗</span>
            LinkedIn Profile
          </a>
        </div>
      </div>
    </header>
  );
}
