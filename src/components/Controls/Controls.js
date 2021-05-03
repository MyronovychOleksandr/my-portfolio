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
      <ul className={s.list}>
        {projects.map(({ name }, idx) => {
          return (
            <li
              className={s.item}
              key={name}
              data-index={idx}
              onClick={this.handleClick}
            >
              {name}
            </li>
          );
        })}
      </ul>
    );
  }
}
