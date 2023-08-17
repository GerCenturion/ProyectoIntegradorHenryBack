import React, { useEffect, useState } from "react";
import axios from "axios";
import { VIDEOGAMES_URL } from "../../constants";
import { useParams } from "react-router-dom";
import Styles from "./videogameDetails.module.css";
import Loader from "../Loader/Loader";
import Rating from "../rating/rating";

export default function VideogameDetails() {
  const [videogame, setVideogame] = useState({
    id: "",
    name: "",
    rating: "",
    description: "",
    released: "",
    background_image: "",
    plataforms: "",
    genres: "",
  });

  const { id } = useParams();

  function getVideogameById(id) {
    axios.get(VIDEOGAMES_URL + "/" + id).then((videogame) => {
      setVideogame({
        id: videogame.data.id,
        name: videogame.data.name,
        rating: videogame.data.rating,
        description: videogame.data.description,
        released: videogame.data.released,
        background_image: videogame.data.background_image,
        plataforms: videogame.data.plataforms.map((e) => `${e} `),
        genres: videogame.data.genres.map((e) => `${e.name} `),
      });
    });
  }

  useEffect(() => {
    getVideogameById(id);
  }, [id]);


  return (
    <div>
      {(!videogame.description && <Loader />) || (
        <div className={Styles.content} key={videogame.id}>
          <img
            className={Styles.img}
            src={videogame.background_image}
            alt={videogame.name}
          />
          <div className={Styles.name}>{videogame.name}</div>
          <div className={Styles.rating}>
            <Rating rating={videogame.rating} /> {Rating}{videogame.rating}
          </div>
          <div className={Styles.description}></div>
          <div
            className={Styles.description}
            dangerouslySetInnerHTML={{ __html: videogame.description }}
          ></div>
          <div className={Styles.released}>Released: {videogame.released}</div>
          <div className={Styles.plataforms}>
            Platforms: {videogame.plataforms}
          </div>
          <div className={Styles.genres}>Genres: {videogame.genres}</div>
        </div>
      )}
    </div>
  );
}