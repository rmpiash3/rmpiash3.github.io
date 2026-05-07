import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./Moments.css";

const momentCollections = [
  {
    title: "ICMMPE 2026",
    type: "Conference Publication",
    text:
      "Paper presentation, certificate receiving, conference sessions, and closing ceremony moments from ICMMPE 2026.",
    image: require("../../assests/images/moments/icmmpe2026/icmmpe-2026-stage.webp"),
    link: "/moments/icmmpe-2026",
  },
  {
    title: "Awards & Certificates",
    type: "Achievements",
    text: "Gift receiving, certificates, and recognition moments.",
    image: require("../../assests/images/moments/icmmpe2026/icmmpe-2026-certificate.webp"),
  },
  {
    title: "Campus & Seminars",
    type: "Academic Life",
    text: "Seminars, workshops, campus activities, and event memories.",
    image: require("../../assests/images/moments/icmmpe2026/icmmpe-2026-seminar.webp"),
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
              <p className="section-kicker">Photo Gallery</p>
              <h1 style={{ color: theme.text }}>Moments</h1>
              <p style={{ color: theme.secondaryText }}>
                A visual archive for publications, certificates, project demonstrations, campus activities, and professional milestones.
              </p>
            </section>
          </Fade>

          <Fade bottom duration={1000} distance="32px">
            <div className="moment-collection-grid">
              {momentCollections.map((card) => {
                const content = (
                  <>
                    <div className="moment-collection-media">
                      <img src={card.image} alt={card.title} loading="lazy" />
                    </div>
                    <div className="moment-collection-copy">
                      <span>{card.type}</span>
                      <h2>{card.title}</h2>
                      <p>{card.text}</p>
                      {card.link && <strong>View full story</strong>}
                    </div>
                  </>
                );

                if (card.link) {
                  return (
                    <Link
                      className="moment-collection-card is-clickable"
                      to={card.link}
                      key={card.title}
                    >
                      {content}
                    </Link>
                  );
                }

                return (
                  <div className="moment-collection-card" key={card.title}>
                    {content}
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
