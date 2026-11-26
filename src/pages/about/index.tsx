import Head from 'next/head';
import CVHeader from '@/components/CVHeader';
import ProfessionalSummary from '@/components/ProfessionalSummary';
import TechnicalSkills from '@/components/TechnicalSkills';
import WorkExperience from '@/components/WorkExperience';
import KeyAchievements from '@/components/KeyAchievements';
import styles from './index.module.css';

export default function CV() {
  return (
    <>
      <Head>
        <title>{'About | Anand Raj'}</title>
        <meta
          name="description"
          content="Learn about Anand Raj's experience, technical skills, and professional achievements."
        />
      </Head>
      <div className={styles.page}>
        <CVHeader />
        <ProfessionalSummary />
        <TechnicalSkills />
        <WorkExperience />
        <KeyAchievements />
      </div>
    </>
  );
}