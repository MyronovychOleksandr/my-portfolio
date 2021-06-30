import React from "react";
import sprite from "../../assets/sprite/sprite.svg";
import s from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div>
      <h2 className={s.title}>Contacts</h2>
      <div className={s.container}>
        <p className={s.box}>
          <span className={s.cont}>myronovych.o7@gmail.com</span>

          <span className={s.cont}>098 321 69 64</span>
        </p>

        <ul className={s.list}>
          <li className={s.item}>
            <a
              href="https://www.facebook.com/profile.php?id=100023580738335"
              target="_blank"
              rel="noreferrer"
            >
              <svg className={s.icon}>
                <use href={sprite + "#facebook"} />
              </svg>
            </a>
          </li>
          <li className={s.item}>
            <a
              href="https://www.linkedin.com/in/myronovych/"
              target="_blank"
              rel="noreferrer"
            >
              <svg className={s.icon}>
                <use href={sprite + "#linkedin"} />
              </svg>
            </a>
          </li>
          <li className={s.item}>
            <a
              href="https://github.com/MyronovychOleksandr"
              target="_blank"
              rel="noreferrer"
            >
              <svg className={s.icon}>
                <use href={sprite + "#github"}></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
