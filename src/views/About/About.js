import React from "react";
import s from "./About.module.css";

const About = () => {
  return (
    <div className={s.container}>
      <div className={s.section}>
        <h2 className={s.title}>EDUCATION</h2>
        <div className={s.box}>
          <h3>IT School GoIT</h3>
          <p>
            <span>Full stack developer</span>{" "}
            <span className={s.period}>
              {" "}
              &#40;april 2020 - april 2021&#41;{" "}
            </span>
          </p>
        </div>

        <div className={s.box}>
          <h3>Ostroh Academy National University</h3>
          <p>
            <span>Finance and Credit</span>{" "}
            <span className={s.period}> &#40;2010 - 2015&#41; </span>
          </p>
        </div>
      </div>

      <div className={s.section}>
        <h2 className={s.title}>WORK EXPERIENCE</h2>
        <div className={s.box}>
          <h3>European credit group</h3>
          <p>
            <span>Support specialist</span>{" "}
            <span className={s.period}>
              {" "}
              &#40;december 2019 - march 2021&#41;{" "}
            </span>
          </p>
        </div>

        <div className={s.box}>
          <h3>Spektr Draft</h3>
          <p>
            <span>Sales manager</span>{" "}
            <span className={s.period}>
              {" "}
              &#40;march 2018 - november 2019&#41;{" "}
            </span>
          </p>
        </div>

        <div className={s.box}>
          <h3>Maxi Marketing</h3>
          <p>
            <span>Sales manager</span>{" "}
            <span className={s.period}>
              {" "}
              &#40;march 2017 - february 2018&#41;{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
