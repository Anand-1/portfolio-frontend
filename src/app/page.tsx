import React from "react";
import { Metadata } from "next";
import { pagesConfig } from "../../config/pages";
import styles from "./page.module.css";
const ContentSection = React.lazy(() => import("@/app/components/ContentSection/ContentSection"));
const SkillsCircularChart = React.lazy(()=>import("@/app/components/Charts/SkillsCircular/SkillsCircularChart"));
const HighchartsSkillsLoader = React.lazy(() => import("@/app/components/Charts/HIghchartTree/HighchartSkillsLoader"));

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
          <SkillsCircularChart />
          <HighchartsSkillsLoader />
        </div>
       
      </main>
      <ContentSection />
    </div>
  );
}
