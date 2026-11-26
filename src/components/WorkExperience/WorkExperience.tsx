'use client';

import styles from './WorkExperience.module.css';
import { cvData } from '@/data/cv';

export default function WorkExperience() {
  const experiences = cvData.workExperience;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Work Experience</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineMarker} />
              <div className={styles.experienceCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.titleSection}>
                    <h3 className={styles.position}>{exp.position}</h3>
                    <p className={styles.company}>{exp.company}</p>
                    {exp.client && <p className={styles.client}>Client: {exp.client}</p>}
                  </div>
                  <div className={styles.duration}>{exp.duration}</div>
                </div>

                <div className={styles.responsibilities}>
                  <h4 className={styles.responsibilitiesTitle}>Key Responsibilities:</h4>
                  <ul className={styles.responsibilitiesList}>
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className={styles.responsibilityItem}>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.technologies}>
                  <h4 className={styles.technologiesTitle}>Technologies:</h4>
                  <p className={styles.technologiesList}>{exp.technologies}</p>
                </div>

                {exp.teamSize && (
                  <div className={styles.teamSize}>
                    <span>Team Size: {exp.teamSize}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
