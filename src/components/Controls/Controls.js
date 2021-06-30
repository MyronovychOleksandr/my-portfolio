import React, { Component } from "react";
import s from "./Controls.module.css";

export default class Controls extends Component {
  state = {};

  handleClick = (e) => {
    this.props.onChangeProject(Number(e.target.dataset.index));
  };

  render() {
    const { projects } = this.props;
    return (
      <div className={s.list}>
        {projects.map(({ name }, idx) => {
          return (
            <div key={name}>
            <input
            id={name}
              type="radio"
              className={s.item}
              value={name}
              name="projects"
              data-index={idx}
              onClick={this.handleClick}
            />
            <label htmlFor={name} className={s.label} >{name}</label>
            </div>
              
          );
        })}
      </div>
    );
  }
}
