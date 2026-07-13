'use client';

import { cvData } from '@/data/cv';
import styles from './SkillsCircularChart.module.css';

const categoryPalette = ['#60a5fa', '#34d399', '#f59e0b', '#a78bfa', '#ec4899'];

export default function SkillsCircularChart() {
  const categories = [
    { title: 'Frontend', value: cvData.technicalSkills.frontend.length, color: categoryPalette[0] },
    { title: 'Backend', value: cvData.technicalSkills.backend.length, color: categoryPalette[1] },
    { title: 'Cloud & DevOps', value: cvData.technicalSkills.cloudDevOps.length, color: categoryPalette[2] },
    { title: 'Testing', value: cvData.technicalSkills.testing.length, color: categoryPalette[3] },
    { title: 'AI / ML', value: cvData.technicalSkills.ai.length, color: categoryPalette[4] },
  ];

  const total = categories.reduce((sum, category) => sum + category.value, 0);
  let startAngle = 0;

  const segments = categories.map((category) => {
    const percentage = (category.value / total) * 100;
    const angle = (category.value / total) * 360;
    const endAngle = startAngle + angle;
    const segmentStyle = {
      background: `conic-gradient(${category.color} ${startAngle}deg ${endAngle}deg, rgba(255,255,255,0.12) ${endAngle}deg 360deg)`,
    } as const;

    startAngle = endAngle;

    return {
      ...category,
      percentage,
      segmentStyle,
    };
  });

  return (
    <section className={styles.section} aria-label="Skills circular chart">
      <div className={styles.card}>
        <div className={styles.chartWrap}>
          <div className={styles.chart} style={{ background: 'conic-gradient(#60a5fa 0deg 90deg, #34d399 90deg 200deg, #f59e0b 200deg 300deg, #a78bfa 300deg 360deg)' }}>
            <div className={styles.center}>
              <p className={styles.label}>Core Skills</p>
              <p className={styles.value}>{total}</p>
            </div>
          </div>

          <div className={styles.legend}>
            {segments.map((segment) => (
              <div key={segment.title} className={styles.legendItem}>
                <span className={styles.dot} style={{ backgroundColor: segment.color }} />
                <span className={styles.legendText}>{segment.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
