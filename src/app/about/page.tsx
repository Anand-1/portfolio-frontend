import React from "react";
import { Metadata } from "next";
import CVHeader from "@/app/components/CVHeader";
import ProfessionalSummary from "@/app/components/ProfessionalSummary";
import TechnicalSkills from "@/app/components/TechnicalSkills";
import WorkExperience from "@/app/components/WorkExperience";
import KeyAchievements from "@/app/components/KeyAchievements";
import { pagesConfig } from "../../../config/pages";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: pagesConfig.resume.metadata.title,
  description: pagesConfig.resume.metadata.description,
};

export default function CV() {
  return (
    <div className={styles.page}>
      <CVHeader />
      <ProfessionalSummary />
      <TechnicalSkills />
      <WorkExperience />
      <KeyAchievements />
    </div>
  );
}