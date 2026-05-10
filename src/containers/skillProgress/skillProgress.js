import React from "react";
import "./Progress.css";
import { techStack } from "../../portfolio";

const proficiencyMeta = [
  {
    shortName: "DT",
    visualType: "digitalTwin",
    accent: "#5b6cff",
    softAccent: "#dbeafe",
    spark: "0,42 28,36 56,28 84,30 112,18 140,24",
    bars: [44, 62, 78, 58],
  },
  {
    shortName: "CAD",
    visualType: "mechanical",
    accent: "#f97316",
    softAccent: "#ffedd5",
    spark: "0,36 28,28 56,34 84,22 112,26 140,18",
    bars: [60, 46, 82, 72],
  },
  {
    shortName: "RB",
    visualType: "robotics",
    accent: "#14b8a6",
    softAccent: "#ccfbf1",
    spark: "0,38 28,24 56,30 84,16 112,22 140,14",
    bars: [50, 72, 58, 80],
  },
  {
    shortName: "RT",
    visualType: "writing",
    accent: "#8b5cf6",
    softAccent: "#ede9fe",
    spark: "0,40 28,34 56,26 84,20 112,18 140,12",
    bars: [40, 52, 70, 90],
  },
];

function DigitalTwinVisual() {
  return (
    <svg className="proficiency-topic-svg" viewBox="0 0 180 120" aria-hidden="true">
      <defs>
        <linearGradient id="dtBattery" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="48%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="dtGlass" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.34" />
        </linearGradient>
        <radialGradient id="dtHeat" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.92" />
          <stop offset="58%" stopColor="#f97316" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="90" cy="88" rx="70" ry="14" fill="#dbeafe" opacity="0.8" />
      <path d="M45 50 L130 38 L156 54 L72 70 Z" fill="url(#dtGlass)" stroke="#93c5fd" strokeWidth="1.5" />
      <path d="M43 61 L128 49 L156 65 L72 82 Z" fill="#1f2937" opacity="0.24" />
      <path d="M50 56 L128 46 L146 58 L68 72 Z" fill="url(#dtBattery)" opacity="0.92" />
      <path d="M65 53 L83 50 L101 61 L83 64 Z" fill="#60a5fa" opacity="0.65" />
      <path d="M90 49 L110 46 L129 57 L108 61 Z" fill="#bfdbfe" opacity="0.76" />
      <circle cx="78" cy="78" r="18" fill="url(#dtHeat)" />
      <circle cx="118" cy="70" r="14" fill="url(#dtHeat)" />
      <path d="M35 35 C62 18 106 17 146 31" fill="none" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="5 8" opacity="0.72" />
      <circle cx="42" cy="34" r="3.5" fill="#6366f1" />
      <circle cx="103" cy="20" r="3.5" fill="#6366f1" />
      <circle cx="145" cy="31" r="3.5" fill="#6366f1" />
      <path d="M28 89 L50 84 L70 88 L92 79" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
      <path d="M119 92 C126 83 135 82 144 91" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MechanicalVisual() {
  return (
    <svg className="proficiency-topic-svg" viewBox="0 0 180 120" aria-hidden="true">
      <defs>
        <linearGradient id="mechBody" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="42%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <radialGradient id="mechHeat" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.95" />
          <stop offset="46%" stopColor="#f97316" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
        </radialGradient>
      </defs>
      <rect x="18" y="20" width="144" height="82" rx="18" fill="#eff6ff" stroke="#c7d2fe" />
      <g opacity="0.42">
        <rect x="28" y="31" width="10" height="48" fill="#22c55e" />
        <rect x="28" y="31" width="10" height="12" fill="#ef4444" />
        <rect x="28" y="43" width="10" height="12" fill="#f97316" />
        <rect x="28" y="55" width="10" height="12" fill="#eab308" />
      </g>
      <g transform="translate(47 33)">
        <rect x="20" y="19" width="64" height="28" rx="8" fill="url(#mechBody)" stroke="#1e40af" strokeWidth="1.4" />
        <circle cx="24" cy="33" r="20" fill="#bfdbfe" stroke="#1e40af" strokeWidth="2" />
        <circle cx="24" cy="33" r="9" fill="#2563eb" />
        <circle cx="84" cy="33" r="18" fill="#bfdbfe" stroke="#1e40af" strokeWidth="2" />
        <circle cx="84" cy="33" r="8" fill="#2563eb" />
        <rect x="36" y="12" width="34" height="9" rx="4" fill="#3b82f6" />
        <rect x="44" y="45" width="28" height="10" rx="5" fill="#93c5fd" />
        <circle cx="54" cy="32" r="27" fill="url(#mechHeat)" />
      </g>
      <path d="M52 92 C76 80 108 84 136 70" fill="none" stroke="#f97316" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M120 22 L146 22 M126 30 L154 30 M130 38 L148 38" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" opacity="0.82" />
    </svg>
  );
}

function RoboticsVisual() {
  return (
    <svg className="proficiency-topic-svg" viewBox="0 0 180 120" aria-hidden="true">
      <defs>
        <linearGradient id="robotArm" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="54%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
      </defs>
      <ellipse cx="94" cy="95" rx="76" ry="10" fill="#dbeafe" opacity="0.82" />
      <g transform="translate(35 20)">
        <rect x="12" y="58" width="44" height="16" rx="8" fill="#cbd5e1" />
        <rect x="23" y="72" width="24" height="8" rx="4" fill="#64748b" />
        <circle cx="34" cy="52" r="14" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
        <path d="M41 44 L72 23" stroke="url(#robotArm)" strokeWidth="14" strokeLinecap="round" />
        <circle cx="74" cy="22" r="11" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
        <path d="M82 26 L102 47" stroke="url(#robotArm)" strokeWidth="12" strokeLinecap="round" />
        <circle cx="105" cy="50" r="8" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
        <path d="M111 51 C121 52 126 47 130 40" fill="none" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
        <path d="M112 53 C121 58 128 58 134 53" fill="none" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
      </g>
      <g transform="translate(100 66)">
        <rect x="0" y="8" width="52" height="24" rx="8" fill="#1e293b" />
        <rect x="10" y="0" width="31" height="13" rx="5" fill="#94a3b8" />
        <circle cx="13" cy="35" r="7" fill="#334155" />
        <circle cx="39" cy="35" r="7" fill="#334155" />
        <circle cx="13" cy="35" r="3" fill="#cbd5e1" />
        <circle cx="39" cy="35" r="3" fill="#cbd5e1" />
      </g>
      <path d="M24 38 C38 30 52 31 64 41" fill="none" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" opacity="0.72" />
      <circle cx="28" cy="38" r="3" fill="#14b8a6" />
      <circle cx="62" cy="41" r="3" fill="#14b8a6" />
    </svg>
  );
}

function WritingVisual() {
  return (
    <svg className="proficiency-topic-svg" viewBox="0 0 180 120" aria-hidden="true">
      <defs>
        <linearGradient id="docFill" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#dbeafe" />
        </linearGradient>
      </defs>
      <ellipse cx="92" cy="94" rx="60" ry="10" fill="#e0e7ff" opacity="0.75" />
      <path d="M58 16 H112 L136 40 V96 H58 Z" fill="url(#docFill)" stroke="#cbd5e1" strokeWidth="1.5" />
      <path d="M112 16 V40 H136" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1.5" />
      <path d="M72 45 H118 M72 57 H124 M72 69 H116 M72 81 H103" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
      <g transform="translate(82 77) rotate(-18)">
        <rect x="0" y="0" width="58" height="8" rx="4" fill="#1e293b" />
        <rect x="45" y="0" width="14" height="8" rx="4" fill="#f8fafc" />
        <path d="M58 0 L72 4 L58 8 Z" fill="#475569" />
        <path d="M-10 4 H0" stroke="#8b5cf6" strokeWidth="4" strokeLinecap="round" />
      </g>
      <circle cx="47" cy="25" r="4" fill="#8b5cf6" opacity="0.42" />
      <circle cx="142" cy="67" r="3" fill="#5b6cff" opacity="0.42" />
    </svg>
  );
}

function ProficiencyVisual({ type }) {
  if (type === "digitalTwin") {
    return <DigitalTwinVisual />;
  }

  if (type === "mechanical") {
    return <MechanicalVisual />;
  }

  if (type === "robotics") {
    return <RoboticsVisual />;
  }

  return <WritingVisual />;
}

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
      <div className="proficiency-card-visual">
        <ProficiencyVisual type={meta.visualType} />
      </div>
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
