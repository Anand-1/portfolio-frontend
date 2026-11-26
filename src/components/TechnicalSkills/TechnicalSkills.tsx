'use client';

import styles from './TechnicalSkills.module.css';
import { cvData } from '@/data/cv';

export default function TechnicalSkills() {
  const skills = cvData.technicalSkills;

  const skillCategories = [
    { title: 'Frontend', items: skills.frontend },
    { title: 'Backend', items: skills.backend },
    { title: 'Databases', items: skills.databases },
    { title: 'Cloud & DevOps', items: skills.cloudDevOps },
    { title: 'Testing', items: skills.testing },
    { title: 'Accessibility', items: skills.accessibility },
    { title: 'Architecture', items: skills.architecture },
    { title: 'AI / ML', items: skills.ai },
    { title: 'Tools', items: skills.tools },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Technical Skills</h2>
        <div className={styles.categoriesGrid}>
          {skillCategories.map((category) => (
            <div key={category.title} className={styles.categoryCard}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillsTagsContainer}>
                {category.items.map((skill) => (
                  <span key={skill} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
