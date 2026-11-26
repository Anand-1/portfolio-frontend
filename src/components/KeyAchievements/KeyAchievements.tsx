'use client';

import styles from './KeyAchievements.module.css';
import { cvData } from '@/data/cv';

export default function KeyAchievements() {
  const achievements = cvData.keyAchievements;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Key Achievements</h2>
        <div className={styles.achievementsGrid}>
          {achievements.map((achievement, index) => (
            <div key={index} className={styles.achievementCard}>
              <div className={styles.achievementNumber}>{index + 1}</div>
              <p className={styles.achievementText}>{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
