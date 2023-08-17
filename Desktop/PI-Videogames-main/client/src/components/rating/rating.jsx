import React from 'react';
import style from "./rating.module.css";

const Rating = ({ rating }) => {
  const filledStars = Math.floor(rating); // Número de estrellas llenas
  const hasHalfStar = rating - filledStars >= 0.5; // Verifica si hay una mitad de estrella
  const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0); // Número de estrellas vacías

  return (
    <div className={style.rating}>
      {[...Array(filledStars)].map((_, index) => (
        <span key={index}>&#9733;</span> 
      ))}
      {hasHalfStar && <span>&#10031;</span>}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={index}>&#9734;</span> 
      ))}
    </div>
  );
};


export default Rating;
