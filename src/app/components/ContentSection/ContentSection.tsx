'use client';

import styles from './ContentSection.module.css';

export default function ContentSection() {
  return (
    <section className={styles.contentSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>About Me</h2>
          <p className={styles.paragraph}>
            I'm a passionate full-stack developer with expertise in React, Next.js, and TypeScript. 
            I love creating beautiful, performant web applications that solve real-world problems.
          </p>
          
          <h3 className={styles.subheading}>What I Do</h3>
          <ul className={styles.list}>
            <li>Build responsive web applications with React & Next.js</li>
            <li>Develop full-stack solutions with modern JavaScript</li>
            <li>Create optimized user experiences with performance in mind</li>
            <li>Write clean, maintainable code following best practices</li>
          </ul>

          <h3 className={styles.subheading}>My Skills</h3>
          <div className={styles.skillsGrid}>
            <div className={styles.skillTag}>React</div>
            <div className={styles.skillTag}>Next.js</div>
            <div className={styles.skillTag}>TypeScript</div>
            <div className={styles.skillTag}>JavaScript</div>
            <div className={styles.skillTag}>Tailwind CSS</div>
            <div className={styles.skillTag}>Node.js</div>
            <div className={styles.skillTag}>REST APIs</div>
            <div className={styles.skillTag}>AI / ML</div>
            <div className={styles.skillTag}>Git</div>
          </div>

          <div className={styles.ctaSection}>
            <p>Interested in working together? Let's connect!</p>
            <button className={styles.ctaButton}>Get In Touch</button>
          </div>
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
