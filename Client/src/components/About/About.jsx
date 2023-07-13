import React from "react";
import styles  from "./About.module.css";
import gerson from "../fonts/gerson.png";

const About = () => {
  return (
    <div className={styles.about}>
      <img src={gerson}></img>
      <h1>GERSON CENTURION</h1>
    </div>
  );
};

export default About;
