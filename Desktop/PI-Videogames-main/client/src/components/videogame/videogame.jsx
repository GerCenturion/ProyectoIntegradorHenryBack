import React from "react";
import Style from "./videogame.module.css";

export default function Videogame({ name, background_image, genres }) {
  return (
    <div className={Style.content}>
      <div className={Style.card}>
        <div>
          <label>{name}</label>
        </div>
        <div>
          <img className={Style.img} src={background_image} alt={name} />
        </div>
        <div>
          <label className={Style.genres}>
            {genres.map((e) => {
              return `${e.name} `;
            })}
          </label>
        </div>
      </div>
    </div>
  );
}
