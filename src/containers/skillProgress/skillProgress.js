import React from "react";
import "./Progress.css";
import { techStack } from "../../portfolio";

const proficiencyMeta = [
  {
    shortName: "DT",
    accent: "#5b6cff",
    softAccent: "#dbeafe",
    spark: "0,42 28,36 56,28 84,30 112,18 140,24",
    bars: [44, 62, 78, 58],
  },
  {
    shortName: "CAD",
    accent: "#f97316",
    softAccent: "#ffedd5",
    spark: "0,36 28,28 56,34 84,22 112,26 140,18",
    bars: [60, 46, 82, 72],
  },
  {
    shortName: "RB",
    accent: "#14b8a6",
    softAccent: "#ccfbf1",
    spark: "0,38 28,24 56,30 84,16 112,22 140,14",
    bars: [50, 72, 58, 80],
  },
  {
    shortName: "RT",
    accent: "#8b5cf6",
    softAccent: "#ede9fe",
    spark: "0,40 28,34 56,26 84,20 112,18 140,12",
    bars: [40, 52, 70, 90],
  },
];

function getPercentNumber(value) {
  return Number(String(value).replace("%", "")) || 0;
}

function ProficiencyCard({ exp, index }) {
  const meta = proficiencyMeta[index] || proficiencyMeta[0];
  const percent = getPercentNumber(exp.progressPercentage);
  const cardStyle = {
    "--accent": meta.accent,
    "--soft-accent": meta.softAccent,
    "--meter-angle": `${percent * 3.6}deg`,
  };

  return (
    <div className="proficiency-card" style={cardStyle}>
      <div className="proficiency-card-icon">{meta.shortName}</div>
      <div className="proficiency-card-copy">
        <p>{exp.Stack}</p>
        <svg className="proficiency-sparkline" viewBox="0 0 140 46" aria-hidden="true">
          <polyline points={meta.spark} />
        </svg>
      </div>
      <div className="proficiency-ring" aria-label={`${exp.Stack} ${exp.progressPercentage}`}>
        <span>{exp.progressPercentage}</span>
      </div>
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="proficiency-stage" aria-hidden="true">
      <div className="proficiency-map">
        <span className="map-dot dot-one"></span>
        <span className="map-dot dot-two"></span>
        <span className="map-dot dot-three"></span>
        <span className="map-dot dot-four"></span>
        <span className="map-link link-one"></span>
        <span className="map-link link-two"></span>
        <span className="map-link link-three"></span>
      </div>

      <div className="dashboard-card radar-card">
        <div className="radar-shape"></div>
        <div className="radar-lines">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="dashboard-card chart-card">
        <div className="chart-donut"></div>
        <div className="chart-copy">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="chart-bars">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
      </div>

      <div className="dashboard-card data-card">
        {proficiencyMeta.map((item) => {
          return (
            <div className="data-row" key={item.shortName}>
              <span style={{ background: item.accent }}></span>
              <em></em>
            </div>
          );
        })}
      </div>

      <div className="dashboard-operator">
        <span className="operator-head"></span>
        <span className="operator-body"></span>
        <span className="operator-arm"></span>
      </div>
    </div>
  );
}

export default function StackProgress(props) {
    const theme = props.theme;
    if (techStack.viewSkillBars) {
        return (
            <div className="skills-container proficiency-live-shell">
                <div className="skills-bar proficiency-panel">
                    <p className="proficiency-eyebrow">Live capability dashboard</p>
                    <h1 className="skills-heading" style={{ color: theme.text }}>
                      Proficiency
                    </h1>
                    <div className="proficiency-card-stack">
                      {techStack.experience.map((exp, index) => {
                        return (
                          <ProficiencyCard
                            exp={exp}
                            index={index}
                            key={exp.Stack}
                          />
                        );
                      })}
                    </div>
                </div>
                <DashboardPreview />
            </div>
        );
    }
    return null;
}
