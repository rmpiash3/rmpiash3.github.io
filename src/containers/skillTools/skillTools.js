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

function ToolProjectGallery({ tool }) {
  return (
    <div className="tool-project-grid">
      {tool.works.map((work) => {
        return (
          <div className="tool-project-card" key={work.title}>
            <a
              className="tool-project-cover"
              href={work.coverImage}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={work.coverImage} alt={work.title} loading="lazy" />
            </a>
            <div className="tool-project-copy">
              <h4>{work.title}</h4>
              <p>{work.description}</p>
              <div className="tool-project-actions">
                {work.images.map((image, index) => {
                  return (
                    <a
                      href={image.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={image.path}
                    >
                      Image {index + 1}
                    </a>
                  );
                })}
                <a
                  href={work.sourcePackage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CATIA Files ({work.sourceCount})
                </a>
                {work.videos.map((video, index) => {
                  return (
                    <a
                      href={video.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={video.path}
                    >
                      Video {index + 1}
                    </a>
                  );
                })}
              </div>
              {work.note && <small className="tool-project-note">{work.note}</small>}
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
            <div
              className={`tool-work-card${tool.works ? " has-projects" : ""}`}
              key={tool.Stack}
            >
              <div className="tool-work-card-header">
                <h3>{tool.Stack}</h3>
                <span>{tool.progressPercentage}</span>
              </div>
              {tool.works ? (
                <ToolProjectGallery tool={tool} />
              ) : (
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
              )}
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
