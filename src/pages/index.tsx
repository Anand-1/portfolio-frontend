import Head from 'next/head';
import ContentSection from '@/components/ContentSection/ContentSection';
import { pagesConfig } from '../../config/pages';
import styles from './index.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>{`${pagesConfig.home.metadata.title} | Anand Raj`}</title>
        <meta name="description" content={pagesConfig.home.metadata.description} />
      </Head>
      <div className={styles.page}>
        <ContentSection />
      </div>
    </>
  );
}
