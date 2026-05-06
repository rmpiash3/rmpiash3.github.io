import React, { Component } from "react";

export default class CloudInfraImg extends Component {
  render() {
    return (
      <img
        className="skill-illustration"
        alt="Robotics and autonomous systems"
        loading="lazy"
        src={require("../../assests/images/skill_02.webp")}
      />
    );
  }
}
