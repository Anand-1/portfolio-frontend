import { Metadata } from "next";
import { pagesConfig } from "../../config/pages";
import styles from "./page.module.css";
import Navigation from "@/app/Navigation/page";
import ContentSection from "@/app/components/ContentSection";

export const metadata: Metadata = {
  title: pagesConfig.home.metadata.title,
  description: pagesConfig.home.metadata.description,
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Navigation />
        <h1 className={styles.typewriter}>Welcome Anand !</h1>
      </main>
      <ContentSection />
    </div>
  );
}
