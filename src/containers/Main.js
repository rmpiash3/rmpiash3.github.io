import React, { Component } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Skill from "../pages/skill/skillTree";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import Publications from "../pages/publications/Publications";
import Moments from "../pages/moments/Moments";
import ICMMPE2026 from "../pages/moments/ICMMPE2026";
import CatiaWorks from "../pages/catia/CatiaWorks";

export default class Main extends Component {
  render() {
    const theme = this.props.theme;
    console.log(theme);

    return (
      <div>
        <HashRouter basename="/">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => <Home {...props} theme={this.props.theme} />}
            />
            <Route
              path="/home"
              render={(props) => <Home {...props} theme={this.props.theme} />}
            />
            <Route
              path="/skill"
              render={(props) => (
                <Skill {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/catia-works"
              render={(props) => (
                <CatiaWorks {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/experience"
              exact
              render={(props) => (
                <Experience {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/education"
              render={(props) => (
                <Education {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/opensource"
              render={(props) => (
                <Opensource {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/contact"
              render={(props) => (
                <Contact {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/projects"
              render={(props) => (
                <Projects {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/publications"
              render={(props) => (
                <Publications {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/moments/icmmpe-2026"
              render={(props) => (
                <ICMMPE2026 {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/moments"
              exact
              render={(props) => (
                <Moments {...props} theme={this.props.theme} />
              )}
            />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
