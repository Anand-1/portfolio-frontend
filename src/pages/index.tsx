import React from "react";
import { Metadata } from "next";
import { pagesConfig } from "../../config/pages";
import styles from "./page.module.css";
const ContentSection = React.lazy(() => import("@/app/components/ContentSection/ContentSection"));
export const metadata: Metadata = {
  title: pagesConfig.home.metadata.title,
  description: pagesConfig.home.metadata.description,
};

export default function Home() {
  return (
    <div className={styles.page}>
      <ContentSection />
    </div>
  );
}
