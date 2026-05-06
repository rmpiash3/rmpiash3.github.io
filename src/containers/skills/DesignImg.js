import React, { Component } from "react";

export default class DesignImg extends Component {
  render() {
    return (
      <img
        className="skill-illustration"
        alt="Engineering design and simulation"
        loading="lazy"
        src={require("../../assests/images/skill_03.webp")}
      />
    );
  }
}
