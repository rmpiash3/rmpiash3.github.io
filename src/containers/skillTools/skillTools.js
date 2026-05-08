import React from "react";
import "./skillTools.css";
import { tools } from "../../portfolio";
import { Fade } from "react-reveal";

function ToolBar({ items }) {
  return (
    <div className="tool-bar">
      {items.map((exp) => {
        const progressStyle = {
          width: exp.progressPercentage,
        };
        return (
          <div className="tool" key={exp.Stack}>
            <div className="tool-title-row">
              <p>{exp.Stack}</p>
              <span>{exp.progressPercentage}</span>
            </div>
            <div className="tool-meter" aria-label={`${exp.Stack} ${exp.progressPercentage}`}>
              <span style={progressStyle}></span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ToolWorkShowcase() {
  return (
    <div className="tool-work-showcase">
      <div className="tool-work-heading">
        <p>Work Showcase Slots</p>
        <h2>Click a work type to view design files, images, videos, and reports once uploaded.</h2>
      </div>
      <div className="tool-work-grid">
        {tools.experience.map((tool) => {
          return (
            <div className="tool-work-card" key={tool.Stack}>
              <div className="tool-work-card-header">
                <h3>{tool.Stack}</h3>
                <span>{tool.progressPercentage}</span>
              </div>
              <div className="tool-work-links">
                {tool.workTypes.map((work) => {
                  if (work.link) {
                    return (
                      <a
                        className="tool-work-link"
                        href={work.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={work.title}
                      >
                        <strong>{work.title}</strong>
                        <small>{work.description}</small>
                      </a>
                    );
                  }

                  return (
                    <span className="tool-work-link is-pending" key={work.title}>
                      <strong>{work.title}</strong>
                      <small>{work.description}</small>
                      <em>Coming soon</em>
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function SkillTools() {
  if (tools.viewSkillBars) {
    const firstHalf = tools.experience.slice(0, Math.ceil(tools.experience.length / 2));
    const secondHalf = tools.experience.slice(Math.ceil(tools.experience.length / 2));

    return (
      <Fade bottom duration={2000} distance="40px">
        <div className="tool-heading">
          <h1>Development Tools</h1>
        </div>
        <div className="tool-container">
          <Fade left duration={1500}>
            <ToolBar items={firstHalf} />
          </Fade>

          <Fade right duration={1500}>
            <ToolBar items={secondHalf} />
          </Fade>
        </div>
        <ToolWorkShowcase />
      </Fade>
    );
  }
  return null;
}
