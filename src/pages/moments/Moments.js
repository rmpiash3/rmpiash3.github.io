import React, { Component } from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./Moments.css";

const momentCards = [
  {
    title: "Awards & Certificates",
    text: "Gift receiving, certificate receiving, and achievement moments.",
  },
  {
    title: "Project Demonstrations",
    text: "Robot demos, prototype testing, and engineering presentation moments.",
  },
  {
    title: "Campus & Training",
    text: "Academic events, workshops, trainings, and team activities.",
  },
];

class Moments extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="moments-main">
        <Header theme={theme} />
        <div className="moments-content">
          <Fade bottom duration={1000} distance="40px">
            <section className="moments-hero">
              <p className="section-kicker">Gallery</p>
              <h1 style={{ color: theme.text }}>Moments</h1>
              <p style={{ color: theme.secondaryText }}>
                A visual archive for awards, certificates, project demonstrations, campus activities, and professional milestones.
              </p>
            </section>
          </Fade>
          <Fade bottom duration={1000} distance="32px">
            <div className="moments-grid">
              {momentCards.map((card) => {
                return (
                  <div className="moment-card">
                    <div className="moment-card-media"></div>
                    <h2>{card.title}</h2>
                    <p>{card.text}</p>
                  </div>
                );
              })}
            </div>
          </Fade>
        </div>
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Moments;
