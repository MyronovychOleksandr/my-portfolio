import React, { Component } from "react";
import { projects } from "../../assets/data/projects";
import Controls from "../../components/Controls/Controls";
import ProjectDesc from "../../components/ProjectDesc/ProjectDesc";
import s from "./Projects.module.css";

const startProject = projects[0];

export default class Projects extends Component {
  state = {
    project: startProject,
  };

  changeProject = (newIdx) => {
    this.setState({
      project: projects[newIdx],
    });
  };

  render() {
    const { project } = this.state;
    return (
      <div className={s.container}>
        <Controls projects={projects} onChangeProject={this.changeProject} />
        <ProjectDesc project={project} />
      </div>
    );
  }
}
