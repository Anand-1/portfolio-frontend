import { Metadata } from "next";
import { pagesConfig } from "../../config/pages";
import styles from "./page.module.css";
import ContentSection from "@/app/components/ContentSection";
import SkillsCircularChart from "@/app/components/SkillsCircularChart";

export const metadata: Metadata = {
  title: pagesConfig.home.metadata.title,
  description: pagesConfig.home.metadata.description,
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.typewriter}>Welcome Anand !</h1>
        <SkillsCircularChart />
      </main>
      <ContentSection />
    </div>
  );
}
