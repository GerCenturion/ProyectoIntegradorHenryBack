import React from "react";
import { Link } from "react-router-dom";
import Style from "./nav.module.css";
export default function Nav() {
  return (
    <div className={Style.navContent}>
      <Link to="/home/videogame">
        <label className={Style.icon}>Home 🏠 </label>
      </Link>
      <Link to="/home/createvideogame">
        <label className={Style.btnCreate}>New Game</label>
      </Link>
    </div>
  );
}
