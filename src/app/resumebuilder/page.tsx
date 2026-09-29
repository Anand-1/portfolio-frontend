'use client';

import { useMemo, useState } from 'react';
import { cvData } from '@/data/cv';
import styles from './page.module.css';

type ResumeExperience = {
  company: string;
  duration: string;
  position: string;
  client: string;
  responsibilities: string[];
  technologies: string;
  teamSize: string;
};

type ResumeDraft = {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  summary: string;
  skills: Record<string, string[]>;
  experience: ResumeExperience[];
  achievements: string[];
};

export default function ResumeBuilder() {
  const [resume, setResume] = useState<ResumeDraft>({
    name: cvData.header.name,
    title: cvData.header.title,
    email: cvData.header.contact.email,
    phone: cvData.header.contact.phone,
    location: cvData.header.contact.location,
    linkedin: cvData.header.contact.linkedin,
    summary: cvData.professionalSummary,
    skills: Object.fromEntries(
      Object.entries(cvData.technicalSkills).map(([category, skills]) => [category, [...skills]])
    ),
    experience: cvData.workExperience.map((item) => ({
      company: item.company,
      duration: item.duration,
      position: item.position,
      client: 'client' in item ? item.client ?? '' : '',
      responsibilities: [...item.responsibilities],
      technologies: item.technologies,
      teamSize: 'teamSize' in item ? String(item.teamSize) : '',
    })),
    achievements: [...cvData.keyAchievements],
  });

  const currentSkillSet = useMemo(() => Object.values(resume.skills).flat(), [resume.skills]);

  const updateProfile = (field: keyof ResumeDraft, value: string) => {
    setResume((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const updateSkill = (category: string, skillIndex: number, value: string) => {
    setResume((current) => ({
      ...current,
      skills: {
        ...current.skills,
        [category]: current.skills[category].map((skill, index) =>
          index === skillIndex ? value : skill
        ),
      },
    }));
  };

  const updateExperience = <K extends keyof ResumeExperience>(
    experienceIndex: number,
    field: K,
    value: ResumeExperience[K]
  ) => {
    setResume((current) => ({
      ...current,
      experience: current.experience.map((item, index) =>
        index === experienceIndex ? { ...item, [field]: value } : item
      ),
    }));
  };

  const updateResponsibility = (experienceIndex: number, responsibilityIndex: number, value: string) => {
    setResume((current) => ({
      ...current,
      experience: current.experience.map((item, index) =>
        index === experienceIndex
          ? {
              ...item,
              responsibilities: item.responsibilities.map((responsibility, bulletIndex) =>
                bulletIndex === responsibilityIndex ? value : responsibility
              ),
            }
          : item
      ),
    }));
  };

  const updateAchievement = (achievementIndex: number, value: string) => {
    setResume((current) => ({
      ...current,
      achievements: current.achievements.map((achievement, index) =>
        index === achievementIndex ? value : achievement
      ),
    }));
  };

  const handlePrint = () => window.print();

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
          <button className={styles.primaryButton} onClick={handlePrint} type="button">
            Save as PDF
          </button>
        </div>
      </header>

      <section className={styles.builderLayout}>
        <aside className={styles.editorPanel}>
          <div className={styles.panelTitle}>
            <h2>Builder Studio</h2>
            <span>Profile setup</span>
          </div>

          <details className={styles.formSection} open>
            <summary className={styles.formSectionSummary}>
              <h3>Personal details</h3>
            </summary>
            <div className={styles.formSectionContent}>
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
            </div>
          </details>

          <details className={styles.formSection}>
            <summary className={styles.formSectionSummary}>
              <h3>Summary input</h3>
            </summary>
            <div className={styles.formSectionContent}>
            <div className={styles.formField}>
              <label htmlFor="summary">Executive summary</label>
              <textarea
                id="summary"
                value={resume.summary}
                onChange={(event) => updateProfile('summary', event.target.value)}
              />
            </div>
            </div>
          </details>

          <details className={styles.formSection}>
            <summary className={styles.formSectionSummary}>
              <h3>Career profile</h3>
            </summary>
            <div className={styles.formSectionContent}>
            {Object.entries(resume.skills).map(([category, skills]) => (
              <fieldset className={styles.skillGroup} key={category}>
                <legend>{category}</legend>
                <div className={styles.listEditor}>
                  {skills.map((skill, skillIndex) => (
                    <div className={styles.skillEditorRow} key={`${category}-${skillIndex}`}>
                      <input
                        aria-label={`${category} skill ${skillIndex + 1}`}
                        value={skill}
                        onChange={(event) => updateSkill(category, skillIndex, event.target.value)}
                      />
                      <button
                        aria-label={`Remove ${category} skill ${skillIndex + 1}`}
                        className={styles.removeButton}
                        onClick={() =>
                          setResume((current) => ({
                            ...current,
                            skills: {
                              ...current.skills,
                              [category]: current.skills[category].filter((_, index) => index !== skillIndex),
                            },
                          }))
                        }
                        type="button"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  className={styles.addButton}
                  onClick={() =>
                    setResume((current) => ({
                      ...current,
                      skills: { ...current.skills, [category]: [...current.skills[category], ''] },
                    }))
                  }
                  type="button"
                >
                  Add skill
                </button>
              </fieldset>
            ))}
            </div>
          </details>

          <details className={styles.formSection}>
            <summary className={styles.formSectionSummary}>
              <h3>Key achievements</h3>
            </summary>
            <div className={styles.formSectionContent}>
            <div className={styles.listEditor}>
              {resume.achievements.map((achievement, index) => (
                <div className={styles.skillEditorRow} key={`achievement-${index}`}>
                  <div className={styles.formField}>
                    <label htmlFor={`achievement-${index}`}>Achievement {index + 1}</label>
                    <textarea
                      id={`achievement-${index}`}
                      value={achievement}
                      onChange={(event) => updateAchievement(index, event.target.value)}
                    />
                  </div>
                  <button
                    aria-label={`Remove achievement ${index + 1}`}
                    className={styles.removeButton}
                    onClick={() =>
                      setResume((current) => ({
                        ...current,
                        achievements: current.achievements.filter((_, achievementIndex) => achievementIndex !== index),
                      }))
                    }
                    type="button"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                className={styles.addButton}
                onClick={() => setResume((current) => ({ ...current, achievements: [...current.achievements, ''] }))}
                type="button"
              >
                Add achievement
              </button>
            </div>
            </div>
          </details>

          <details className={styles.formSection}>
            <summary className={styles.formSectionSummary}>
              <h3>Work experience</h3>
            </summary>
            <div className={styles.formSectionContent}>
            {resume.experience.map((item, experienceIndex) => (
              <fieldset className={styles.experienceEditor} key={`experience-${experienceIndex}`}>
                <legend>
                  {item.company || `Experience ${experienceIndex + 1}`}
                </legend>
                <div className={styles.formGrid}>
                  {([
                    ['company', 'Company'],
                    ['position', 'Position'],
                    ['client', 'Client'],
                    ['duration', 'Duration'],
                    ['technologies', 'Technologies'],
                    ['teamSize', 'Team size'],
                  ] as const).map(([field, label]) => (
                    <div className={styles.formField} key={field}>
                      <label htmlFor={`experience-${experienceIndex}-${field}`}>{label}</label>
                      <input
                        id={`experience-${experienceIndex}-${field}`}
                        value={item[field]}
                        onChange={(event) => updateExperience(experienceIndex, field, event.target.value)}
                      />
                    </div>
                  ))}
                </div>
                <h4>Responsibilities</h4>
                {item.responsibilities.map((responsibility, responsibilityIndex) => (
                  <div className={styles.skillEditorRow} key={`responsibility-${responsibilityIndex}`}>
                    <div className={styles.formField}>
                      <label htmlFor={`experience-${experienceIndex}-responsibility-${responsibilityIndex}`}>
                        Responsibility {responsibilityIndex + 1}
                      </label>
                      <textarea
                        id={`experience-${experienceIndex}-responsibility-${responsibilityIndex}`}
                        value={responsibility}
                        onChange={(event) =>
                          updateResponsibility(experienceIndex, responsibilityIndex, event.target.value)
                        }
                      />
                    </div>
                    <button
                      aria-label={`Remove responsibility ${responsibilityIndex + 1} from ${item.company}`}
                      className={styles.removeButton}
                      onClick={() =>
                        updateExperience(
                          experienceIndex,
                          'responsibilities',
                          item.responsibilities.filter((_, index) => index !== responsibilityIndex)
                        )
                      }
                      type="button"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  className={styles.addButton}
                  onClick={() =>
                    updateExperience(experienceIndex, 'responsibilities', [...item.responsibilities, ''])
                  }
                  type="button"
                >
                  Add responsibility
                </button>
                <button
                  aria-label={`Remove experience ${item.company}`}
                  className={styles.removeButton}
                  onClick={() =>
                    setResume((current) => ({
                      ...current,
                      experience: current.experience.filter((_, index) => index !== experienceIndex),
                    }))
                  }
                  type="button"
                >
                  Remove experience
                </button>
              </fieldset>
            ))}
            <button
              className={styles.addButton}
              onClick={() =>
                setResume((current) => ({
                  ...current,
                  experience: [
                    ...current.experience,
                    {
                      company: '',
                      duration: '',
                      position: '',
                      client: '',
                      responsibilities: [''],
                      technologies: '',
                      teamSize: '',
                    },
                  ],
                }))
              }
              type="button"
            >
              Add experience
            </button>
            </div>
          </details>
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
                {currentSkillSet.map((skill, index) => (
                  <span key={`${skill}-${index}`}>{skill}</span>
                ))}
              </div>
            </section>

            <section className={styles.previewSection}>
              <h4>Key Achievements</h4>
              <ul>
                {resume.achievements.map((achievement, index) => (
                  <li key={`preview-achievement-${index}`}>{achievement}</li>
                ))}
              </ul>
            </section>

            <section className={styles.previewSection}>
              <h4>Experience</h4>
              {resume.experience.map((item) => (
                <div className={styles.experienceItem} key={`preview-experience-${item.company}-${item.duration}`}>
                  <h5>{item.position}</h5>
                  <div className={styles.experienceMeta}>
                    {[item.company, item.client || 'Independent', item.duration, item.teamSize && `Team of ${item.teamSize}`]
                      .filter(Boolean)
                      .join(' · ')}
                  </div>
                  <ul>
                    {item.responsibilities.map((responsibility, index) => (
                      <li key={`preview-responsibility-${index}`}>{responsibility}</li>
                    ))}
                  </ul>
                  {item.technologies && <p className={styles.technologies}>{item.technologies}</p>}
                </div>
              ))}
            </section>
          </article>
        </section>
      </section>
    </div>
  );
}
