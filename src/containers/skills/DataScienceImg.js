import React, { Component } from "react";

export default class DataScienceImg extends Component {
  render() {
    return (
      <img
        className="skill-illustration"
        alt="Physics-based modeling and system insight"
        loading="lazy"
        src={require("../../assests/images/skill_01.webp")}
      />
    );
  }
}
