import React, { Component } from "react";

export default class ProjectsImg extends Component {
  render() {
    return (
      <img
        className="projects-illustration"
        alt="Predictive analytics and intelligent engineering projects"
        src={require("../../assests/images/projects_systems.svg")}
      />
    );
  }
}
