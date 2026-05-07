import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./Moments.css";

const icmmpeGallery = [
  {
    title: "Conference Entrance",
    text: "At the ICMMPE 2026 conference venue, DUET, Gazipur.",
    image: require("../../assests/images/moments/icmmpe2026/icmmpe-2026-stage.webp"),
  },
  {
    title: "Certificate Receiving",
    text: "Receiving the certificate after paper presentation.",
    image: require("../../assests/images/moments/icmmpe2026/icmmpe-2026-certificate.webp"),
  },
  {
    title: "Technical Session",
    text: "Conference session moment with participants and peers.",
    image: require("../../assests/images/moments/icmmpe2026/icmmpe-2026-seminar.webp"),
  },
  {
    title: "Conference Lunch",
    text: "Networking and discussion during the conference program.",
    image: require("../../assests/images/moments/icmmpe2026/icmmpe-2026-launch.webp"),
  },
  {
    title: "Closing Ceremony",
    text: "Closing ceremony at Radisson Blu Water Garden, Dhaka.",
    image: require("../../assests/images/moments/icmmpe2026/icmmpe-2026-closing.webp"),
  },
  {
    title: "Industry Expo",
    text: "Exploring engineering and technology exhibitor booths.",
    image: require("../../assests/images/moments/icmmpe2026/icmmpe-2026-expo.webp"),
  },
];

class ICMMPE2026 extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="moments-main">
        <Header theme={theme} />
        <div className="moments-content">
          <Fade bottom duration={1000} distance="40px">
            <Link className="moment-back-link" to="/moments">
              Back to Moments
            </Link>
          </Fade>

          <Fade bottom duration={1000} distance="32px">
            <section className="moment-feature">
              <div className="moment-feature-media">
                <img
                  src={require("../../assests/images/moments/icmmpe2026/icmmpe-2026-stage.webp")}
                  alt="RIAD MAHAMUD PIASH at ICMMPE 2026"
                />
              </div>
              <div className="moment-feature-copy">
                <p className="moment-eyebrow">Conference Publication</p>
                <h1>ICMMPE 2026</h1>
                <p className="moment-summary">
                  Participated in the 3rd International Conference on Mechanical,
                  Manufacturing and Process Engineering (ICMMPE 2026), organized by
                  the Faculty of Mechanical Engineering, DUET, Gazipur.
                </p>
                <div className="moment-paper">
                  <span>My Paper</span>
                  <p>
                    Tomato &amp; Potato Leaf Disease Classification Using YOLO V11
                  </p>
                  <small>
                    Paper ID 196 - Food Engineering Technical Session - Physical presentation
                  </small>
                </div>
                <div className="moment-meta-grid">
                  <div>
                    <span>Date</span>
                    <strong>30-31 Jan 2026</strong>
                  </div>
                  <div>
                    <span>Venue</span>
                    <strong>DUET, Gazipur</strong>
                  </div>
                  <div>
                    <span>Mode</span>
                    <strong>Hybrid</strong>
                  </div>
                </div>
                <div className="moment-links">
                  <a
                    href="https://icmmpeduet.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </a>
                  <a
                    href="https://icmmpeduet.com/wp-content/uploads/2026/01/Paper-List_Field-wise-with-Schedule-Final_Jan-28-2026_Corrected-With-Session-Chair-and-Co-Chair.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Schedule
                  </a>
                </div>
              </div>
            </section>
          </Fade>

          <Fade bottom duration={1000} distance="32px">
            <div className="moments-grid">
              {icmmpeGallery.map((card) => {
                return (
                  <div className="moment-card" key={card.title}>
                    <div className="moment-card-media">
                      <img src={card.image} alt={card.title} loading="lazy" />
                    </div>
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

export default ICMMPE2026;
