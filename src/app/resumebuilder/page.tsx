'use client';

import { useMemo, useState } from 'react';
import { cvData } from '@/data/cv';
import styles from './page.module.css';

export default function ResumeBuilder() {
  const [resume, setResume] = useState({
    name: cvData.header.name,
    title: cvData.header.title,
    email: cvData.header.contact.email,
    phone: cvData.header.contact.phone,
    location: cvData.header.contact.location,
    linkedin: cvData.header.contact.linkedin,
    summary: cvData.professionalSummary,
    skills: cvData.technicalSkills,
    experience: cvData.workExperience,
  });

  const currentSkillSet = useMemo(
    () =>
      Object.values(resume.skills)
        .flatMap((value) => value)
        .slice(0, 18),
    [resume.skills]
  );

  const updateProfile = (field: keyof typeof resume, value: string) => {
    setResume((current) => ({
      ...current,
      [field]: value,
    }));
  };

  return (
    <div className={styles.resumeBuilderPage}>
      <header className={styles.builderHeader}>
        <div>
          <h1>Resume Builder</h1>
          <p className={styles.headerSubtitle}>
            Tailor your professional profile and experience
          </p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.ghostButton}>Save draft</button>
          <button className={styles.secondaryButton}>Preview PDF</button>
          <button className={styles.primaryButton}>Generate resume</button>
        </div>
      </header>

      <section className={styles.builderLayout}>
        <aside className={styles.editorPanel}>
          <div className={styles.panelTitle}>
            <h2>Builder Studio</h2>
            <span>Profile setup</span>
          </div>

          <section className={styles.formSection}>
            <h3>Personal details</h3>
            <div className={styles.formGrid}>
              <div className={styles.formField}>
                <label htmlFor="name">Full name</label>
                <input
                  id="name"
                  value={resume.name}
                  onChange={(event) => updateProfile('name', event.target.value)}
                />
              </div>

              <div className={styles.formField}>
                <label htmlFor="title">Professional title</label>
                <input
                  id="title"
                  value={resume.title}
                  onChange={(event) => updateProfile('title', event.target.value)}
                />
              </div>

              <div className={styles.formField}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  value={resume.email}
                  onChange={(event) => updateProfile('email', event.target.value)}
                />
              </div>

              <div className={styles.formField}>
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  value={resume.phone}
                  onChange={(event) => updateProfile('phone', event.target.value)}
                />
              </div>

              <div className={styles.formField}>
                <label htmlFor="location">Location</label>
                <input
                  id="location"
                  value={resume.location}
                  onChange={(event) => updateProfile('location', event.target.value)}
                />
              </div>

              <div className={styles.formField}>
                <label htmlFor="linkedin">LinkedIn</label>
                <input
                  id="linkedin"
                  value={resume.linkedin}
                  onChange={(event) => updateProfile('linkedin', event.target.value)}
                />
              </div>
            </div>
          </section>

          <section className={styles.formSection}>
            <h3>Summary input</h3>
            <div className={styles.formField}>
              <label htmlFor="summary">Executive summary</label>
              <textarea
                id="summary"
                value={resume.summary}
                onChange={(event) => updateProfile('summary', event.target.value)}
              />
            </div>
          </section>

          <section className={styles.formSection}>
            <h3>Career profile</h3>
            <div className={styles.skillPills}>
              {currentSkillSet.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </section>
        </aside>

        <section className={styles.previewPanel}>
          <div className={styles.previewTop}>
            <h2>Resume Preview</h2>
            <span className={styles.statusBadge}>Ready</span>
          </div>

          <article className={styles.previewCard}>
            <section className={styles.previewHeader}>
              <h3>{resume.name}</h3>
              <p>{resume.title}</p>
              <div className={styles.contactRow}>
                <span>{resume.email}</span>
                <span>{resume.phone}</span>
                <span>{resume.location}</span>
                <span>{resume.linkedin}</span>
              </div>
            </section>

            <section className={styles.previewSection}>
              <h4>Professional Summary</h4>
              <p className={styles.summaryText}>{resume.summary}</p>
            </section>

            <section className={styles.previewSection}>
              <h4>Core Skills</h4>
              <div className={styles.skillPills}>
                {currentSkillSet.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </section>

            <section className={styles.previewSection}>
              <h4>Experience</h4>
              {resume.experience.map((item) => (
                <div className={styles.experienceItem} key={`${item.company}-${item.duration}`}>
                  <h5>{item.position}</h5>
                  <div className={styles.experienceMeta}>
                    {item.company} · {item.client || 'Independent'} · {item.duration}
                  </div>
                  <ul>
                    {item.responsibilities.slice(0, 4).map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </article>
        </section>
      </section>
    </div>
  );
}
