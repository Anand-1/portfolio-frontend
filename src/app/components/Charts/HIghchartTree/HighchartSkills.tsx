"use client";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import * as TreemapModule from "highcharts/modules/treemap.js";
import * as TreegraphModule from "highcharts/modules/treegraph.js";
import { cvData } from '@/data/cv';

const initializeHighcharts = () => {
  const initializeTreemap = (TreemapModule as any).default || TreemapModule;
  if (typeof initializeTreemap === "function") {
    initializeTreemap(Highcharts);
  }

  const initializeTreegraph = (TreegraphModule as any).default || TreegraphModule;
  if (typeof initializeTreegraph === "function") {
    initializeTreegraph(Highcharts);
  }
};

initializeHighcharts();

const HighchartsSkills = () => {
  const aiSkills = cvData.technicalSkills.ai || [];
  const chartData = [
    [undefined, "Frontend", 1],
    [undefined, "Backend", 1],
    [undefined, "Cloud & DevOps", 1],
    [undefined, "Testing", 1],
    [undefined, "AI / ML", 1],
    ["Frontend", "React", 2],
    ["Frontend", "Vue.js", 2],
    ["Frontend", "Angular", 2],
    ["Frontend", "JavaScript", 2],
    ["Backend", "Node.js", 2],
    ["Backend", "Python", 2],
    ["Backend", "Java", 2],
    ["Cloud & DevOps", "AWS", 2],
    ["Cloud & DevOps", "Azure", 2],
    ["Cloud & DevOps", "GCP", 2],
    ["Cloud & DevOps", "Docker", 2],
    ["Testing", "JUnit", 2],
    ["Testing", "Selenium", 2],
    ["Testing", "Postman", 2],
    ["Testing", "Cypress", 2],
    ...aiSkills.map((skill) => ["AI / ML", skill, 2] as const),
  ];

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          chart: {
            type: "treegraph",
            height: 520,
            margin: 100,
            backgroundColor: "var(--highcharts-background-color, #fff)",
            borderColor: "var(--highcharts-border-color, #ccc)",
            borderWidth: 1,
            borderRadius: 8,
          },
          colors: [
            "var(--highcharts-color-0, #60a5fa)",
            "var(--highcharts-color-1, #34d399)",
            "var(--highcharts-color-2, #f59e0b)",
            "var(--highcharts-color-3, #a78bfa)",
          ],
          accessibility: {
            point: {
              valueDescriptionFormat:
                "{index}. {point.id}, {point.value}.",
            },
          },
          title: {
            text: "Skill Proficiency Treegraph",
          },
          subtitle: {
            text: "A visual breakdown of core technical skills",
          },
          plotOptions: {
            treegraph: {
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
              type: "treegraph",
              keys: ["parent", "id", "level"],
              clip: false,
              data: [
                [undefined, "Frontend", 1],
                [undefined, "Backend", 1],
                [undefined, "Cloud & DevOps", 1],
                [undefined, "Testing", 1],
                ["Frontend", "React", 2],
                ["Frontend", "JavaScript", 2],
                ["Backend", "Node.js", 2],
                ["Backend", "Python", 2],
                ["Cloud & DevOps", "AWS", 2],
                ['AWS', "Lamba", 3],
                ['AWS', "EC2", 3],
                ['AWS', "API Gateway,", 3],
                ['AWS', "CDK", 3],
                ["Cloud & DevOps", "Docker", 2],
                ["Testing", "Postman", 2],
                ["Testing", "Cypress", 2],
              ],
              marker: {
                symbol: "circle",
                radius: 6,
                fillColor: "#ffffff",
                lineWidth: 3,
              },
              dataLabels: {
                align: "center",
                pointFormat: "{point.id}",
                style: {
                  color: "var(--highcharts-neutral-color-100, #000)",
                  textOutline: "3px contrast",
                  whiteSpace: "nowrap",
                },
                x: 24,
                crop: false,
                overflow: "none",
              },
              levels: [
                {
                  level: 1,
                  levelIsConstant: false,
                },
                {
                  level: 2,
                  colorByPoint: true,
                },
                {
                  level: 3,
                  colorVariation: {
                    key: "brightness",
                    to: -0.5,
                  },
                },
                {
                  level: 4,
                  colorVariation: {
                    key: "brightness",
                    to: 0.5,
                  },
                },
                {
                  level: 6,
                  dataLabels: {
                    x: 10,
                  },
                  marker: {
                    radius: 4,
                  },
                },
              ],
            },
          ],
        }}
      />
    </div>
  );
};

export default HighchartsSkills;
