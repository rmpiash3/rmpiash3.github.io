import React from "react";
import { Link } from "react-router-dom";
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

function getToolWorkStats(tool) {
  if (!tool.works) {
    return null;
  }

  return tool.works.reduce(
    (stats, work) => {
      return {
        works: stats.works + 1,
        images: stats.images + work.images.length,
        sources: stats.sources + work.sourceCount,
        videos: stats.videos + work.videos.length,
      };
    },
    { works: 0, images: 0, sources: 0, videos: 0 }
  );
}

function ToolWorkLinks({ tool }) {
  const stats = getToolWorkStats(tool);

  if (tool.works) {
    return (
      <div className="tool-work-links">
        <Link className="tool-work-link is-primary" to="/catia-works">
          <strong>View CATIA Works</strong>
          <small>
            Open the full CATIA V5 work interface with design previews,
            source packages, simulation videos, and GitHub folders.
          </small>
          <em>Open work interface</em>
        </Link>
        <span className="tool-work-link is-summary">
          <strong>Design Images</strong>
          <small>{stats.images} preview images from {stats.works} CATIA works.</small>
        </span>
        <span className="tool-work-link is-summary">
          <strong>CATIA Source Files</strong>
          <small>{stats.sources} CATPart, CATProduct, and related files packaged on GitHub.</small>
        </span>
        <span className="tool-work-link is-summary">
          <strong>Simulation Videos</strong>
          <small>{stats.videos} available motion or analysis videos.</small>
        </span>
      </div>
    );
  }

  return (
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
            <div
              className={`tool-work-card${tool.works ? " has-projects" : ""}`}
              key={tool.Stack}
            >
              <div className="tool-work-card-header">
                <h3>{tool.Stack}</h3>
                <span>{tool.progressPercentage}</span>
              </div>
              <ToolWorkLinks tool={tool} />
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
