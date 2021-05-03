import React from "react";
// import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import s from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <Header />
      <div className={s.container}>{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
