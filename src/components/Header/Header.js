import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import sprite from "../../assets/sprite/sprite.svg";
import s from "./Header.module.css";

export default class Header extends Component {
  state = {
    disable: true,
  };

  handleToggle = () => {
    this.setState((prevState) => ({
      disable: !prevState.disable,
    }));
  };

  render() {
    const { disable } = this.state;
    return (
      <header className={s.header}>
        <NavLink to="/" exact>
          <span className={s.visuallyHidden}>Logo</span>
          <svg className={s.icon}>
            <use href={sprite + "#logo"}></use>
          </svg>
        </NavLink>
        <Navigation disable={disable} onHandleToggle={this.handleToggle} />

        <div className={s.box} onClick={this.handleToggle}>
          <span className={s.elem}></span>
          <span className={s.elem}></span>
          <span className={s.elem}></span>
        </div>
      </header>
    );
  }
}
