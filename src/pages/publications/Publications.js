import React, { Component } from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./Publications.css";

class Publications extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="publications-main">
        <Header theme={theme} />
        <div className="publications-content">
          <Fade bottom duration={1000} distance="40px">
            <section className="publications-hero">
              <p className="section-kicker">Research & Technical Work</p>
              <h1 style={{ color: theme.text }}>Publications</h1>
              <p style={{ color: theme.secondaryText }}>
                Research papers, project reports, thesis documents, and technical writing will be organized here.
              </p>
            </section>
          </Fade>
          <Fade bottom duration={1000} distance="32px">
            <div className="publication-grid">
              <a
                className="publication-card"
                href="https://github.com/rmpiash3/smart-larva-detection-spraying-robot/blob/main/docs/project-report.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Project Report</span>
                <h2>Smart Larva Detection and Spraying System Robot</h2>
                <p>
                  YOLO-based robotic prototype for larva detection and targeted spraying for dengue-control support.
                </p>
              </a>
              <div className="publication-card">
                <span>Upcoming</span>
                <h2>Research Publications</h2>
                <p>
                  Published papers, conference work, and accepted manuscripts can be added here.
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Publications;
