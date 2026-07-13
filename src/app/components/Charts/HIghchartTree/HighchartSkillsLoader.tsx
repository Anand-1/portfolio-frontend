"use client";

import dynamic from "next/dynamic";

const HighchartsSkills = dynamic(
  () => import("./HighchartSkills"),
  { ssr: false }
);

const HighchartSkillsLoader = () => {
  return <HighchartsSkills />;
};

export default HighchartSkillsLoader;
