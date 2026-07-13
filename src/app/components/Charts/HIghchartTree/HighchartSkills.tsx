"use client";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import * as TreemapModule from "highcharts/modules/treemap.js";

const initializeTreemap = (TreemapModule as any).default || TreemapModule;
if (typeof initializeTreemap === "function") {
  initializeTreemap(Highcharts);
}

const HighchartsSkills = () => {
  return (
    <div>
      <h1>Highchart Skills Treemap</h1>
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          chart: {
            type: "treemap",
            height: 520,
          },
          title: {
            text: "Skill Proficiency Treemap",
          },
          subtitle: {
            text: "A visual breakdown of core technical skills",
          },
          plotOptions: {
            treemap: {
              layoutAlgorithm: "squarified",
              dataLabels: {
                enabled: true,
                style: {
                  textOutline: "none",
                },
              },
            },
          },
          series: [
            {
              type: "treemap",
              layoutAlgorithm: "squarified",
              data: [
                { name: "JavaScript", value: 120, color: "#f7df1e" },
                { name: "TypeScript", value: 100, color: "#3178c6" },
                { name: "React", value: 90, color: "#61dafb" },
                { name: "Next.js", value: 80, color: "#000000" },
                { name: "Tailwind CSS", value: 70, color: "#38bdf8" },
                { name: "Node.js", value: 75, color: "#3c873a" },
                { name: "Git", value: 50, color: "#f05032" },
                { name: "REST APIs", value: 65, color: "#2563eb" },
              ],
            },
          ],
        }}
      />
    </div>
  );
};

export default HighchartsSkills;
