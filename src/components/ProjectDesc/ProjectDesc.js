import React from "react";
import s from "./ProjectDesc.module.css";

const ProjectDesc = ({ project }) => {
  return (
    <div className={s.container}>
      <h2 className={s.name}>{project.name}</h2>
      <p className={s.technologies}>{project.technologies}</p>
      <p className={s.box}>
        <span className={s.item}>Link: </span>
        <a
          href={project.link}
          className={s.link}
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          {project.name}
        </a>
      </p>
      <p className={s.desc}>{project.desc}</p>
    </div>
  );
};

export default ProjectDesc;
