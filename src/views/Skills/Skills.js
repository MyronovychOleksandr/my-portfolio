import React from "react";
import { v4 as uuidv4 } from "uuid";
import { skills } from "../../assets/data/skills";
import s from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={s.container}>
      {skills.map(({ name, techs }, idx) => {
        return (
          <div className={s.stack} key={uuidv4()}>
            <div className={s.name}>{name}</div>
            <div className={s.list}>
              {techs.map((tech) => {
                return (
                  <span className={s.tech} key={uuidv4()}>
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
