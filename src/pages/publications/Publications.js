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
                Research papers, conference publications, project reports, thesis documents, and technical writing.
              </p>
            </section>
          </Fade>
          <Fade bottom duration={1000} distance="32px">
            <div className="publication-grid">
              <a
                className="publication-card"
                href="https://icmmpeduet.com/wp-content/uploads/2026/01/Paper-List_Field-wise-with-Schedule-Final_Jan-28-2026_Corrected-With-Session-Chair-and-Co-Chair.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Conference Publication</span>
                <h2>Tomato &amp; Potato Leaf Disease Classification Using YOLO V11</h2>
                <p>
                  Paper ID 196 at ICMMPE 2026, Food Engineering Technical Session 4, DUET, Gazipur.
                </p>
              </a>
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
            </div>
          </Fade>
        </div>
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Publications;
