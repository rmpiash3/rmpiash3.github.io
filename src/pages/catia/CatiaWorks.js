import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { tools } from "../../portfolio";
import "./CatiaWorks.css";

const githubFolderBase =
  "https://github.com/rmpiash3/rmpiash3.github.io/tree/main/public/catia-works";

function getCatiaTool() {
  return tools.experience.find((tool) => tool.Stack === "CATIA V5");
}

function getWorkSlug(work) {
  const marker = "/catia-works/";
  const source = work.coverImage || work.sourcePackage || "";
  const markerIndex = source.indexOf(marker);

  if (markerIndex === -1) {
    return "";
  }

  return source.slice(markerIndex + marker.length).split("/")[0];
}

function getTotals(works) {
  return works.reduce(
    (totals, work) => {
      return {
        images: totals.images + work.images.length,
        files: totals.files + work.sourceCount,
        videos: totals.videos + work.videos.length,
      };
    },
    { images: 0, files: 0, videos: 0 }
  );
}

class CatiaWorks extends Component {
  render() {
    const theme = this.props.theme;
    const catiaTool = getCatiaTool();
    const works = catiaTool && catiaTool.works ? catiaTool.works : [];
    const totals = getTotals(works);

    return (
      <div className="catia-page-main">
        <Header theme={theme} />
        <main className="catia-page-content">
          <Fade bottom duration={1000} distance="40px">
            <Link className="catia-back-link" to="/skill">
              Back to Skill
            </Link>
            <section className="catia-hero">
              <div>
                <p className="catia-kicker">CATIA V5 Work Interface</p>
                <h1 style={{ color: theme.text }}>CATIA V5 Works</h1>
                <p style={{ color: theme.secondaryText }}>
                  Mechanical design, part modeling, assemblies, surface work,
                  and simulation outputs collected from my CATIA V5 practice
                  and project folders.
                </p>
              </div>
              <div className="catia-stat-panel">
                <span>{works.length}</span>
                <small>Works</small>
                <span>{totals.images}</span>
                <small>Images</small>
                <span>{totals.files}</span>
                <small>Source Files</small>
                <span>{totals.videos}</span>
                <small>Videos</small>
              </div>
            </section>
          </Fade>

          <Fade bottom duration={1000} distance="32px">
            <section className="catia-grid">
              {works.map((work) => {
                const slug = getWorkSlug(work);
                const githubUrl = `${githubFolderBase}/${slug}`;

                return (
                  <article className="catia-card" key={work.title}>
                    <a
                      className="catia-card-cover"
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={work.coverImage} alt={work.title} loading="lazy" />
                    </a>
                    <div className="catia-card-copy">
                      <div className="catia-card-title-row">
                        <a
                          href={githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h2>{work.title}</h2>
                        </a>
                        <span>{work.sourceCount} files</span>
                      </div>
                      <p>{work.description}</p>
                      <div className="catia-media-strip">
                        {work.images.slice(0, 4).map((image, index) => {
                          return (
                            <a
                              href={image.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              key={image.path}
                              aria-label={`${work.title} image ${index + 1}`}
                            >
                              <img src={image.path} alt={image.title} loading="lazy" />
                            </a>
                          );
                        })}
                      </div>
                      <div className="catia-actions">
                        <a
                          className="catia-primary-action"
                          href={githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View on GitHub
                        </a>
                        <a
                          href={work.sourcePackage}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Download CATIA ZIP
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
                      {work.note && <small className="catia-note">{work.note}</small>}
                    </div>
                  </article>
                );
              })}
            </section>
          </Fade>
        </main>
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default CatiaWorks;
