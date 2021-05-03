import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes";
import s from "./Navigation.module.css";

const Navigation = ({ disable, onHandleToggle }) => {
  const navClasses = [s.list];

  if (disable) {
    navClasses.push(s.disable);
  }

  return (
    <nav className={navClasses.join(" ")}>
      {routes.map((route) => {
        return (
          <li
            className={s.item}
            key={route.label}
            onClick={() => onHandleToggle()}
          >
            <NavLink
              to={route.path}
              exact={route.exact}
              className={s.link}
              activeClassName={s.active}
            >
              {route.label}
            </NavLink>
          </li>
        );
      })}
    </nav>
  );
};

export default Navigation;
