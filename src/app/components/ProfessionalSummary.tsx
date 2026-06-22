'use client';

import styles from './ProfessionalSummary.module.css';
import { cvData } from '@/data/cv';

export default function ProfessionalSummary() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Professional Summary</h2>
        <p className={styles.summary}>{cvData.professionalSummary}</p>
      </div>
    </section>
  );
}
