import { Metadata } from "next";
import { pagesConfig } from "../../config/pages";
import styles from "./page.module.css";
import ContentSection from "@/app/components/ContentSection";
import SkisCircularChart from "@/app/components/Charts/SkillsCircular/SkillsCircularChart";
import HighchartsSkillsLoader from "@/app/components/Charts/HIghchartTree/HighchartSkillsLoader";

export const metadata: Metadata = {
  title: pagesConfig.home.metadata.title,
  description: pagesConfig.home.metadata.description,
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.typewriter}>Welcome Anand !</h1>
        <div className={styles.chartsContainer}>
          <SkisCircularChart />
          <HighchartsSkillsLoader />
        </div>
       
      </main>
      <ContentSection />
    </div>
  );
}
