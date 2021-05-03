import React from "react";
import s from "./Home.module.css";

const Home = () => {
  return (
    <div className={s.container}>
      <p className={s.text}>
        Hi! My name is Oleksandr and I am a future full-stack developer. My
        development experience is still limited by my own pet-project and
        student projects, but I have a great desire to develop in this field. I
        know it will be hard, but it doesn't stop me. I believe I have enough
        qualities to meet this challenge.{" "}
      </p>
      <p className={s.text}>
        I completed IT courses at ITSchool GoIT, where I received an initial
        background. Every day I work to gain new knowledge, which I will then be
        able to implement in real projects. Now I am looking for a great team in
        which I can develop my skills and become a high-class developer. In
        return, I guarantee responsibility and independence.
      </p>
    </div>
  );
};

export default Home;
