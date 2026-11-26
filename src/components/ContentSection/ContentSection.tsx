'use client';

import styles from './ContentSection.module.css';

export default function ContentSection() {
  return (
    <section className={styles.contentSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>About Me</h2>
          <p className={styles.paragraph}>
            I&apos;m a passionate full-stack developer with expertise in React, Next.js, and TypeScript.
            I love creating beautiful, performant web applications that solve real-world problems.
          </p>
        </div>

        <div className={styles.image}>
          <div className={styles.imagePlaceholder}>
            <svg
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="2" />
              <circle cx="100" cy="80" r="25" fill="currentColor" opacity="0.6" />
              <path
                d="M 70 120 Q 100 140 130 120"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="90" cy="75" r="4" fill="currentColor" />
              <circle cx="110" cy="75" r="4" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
