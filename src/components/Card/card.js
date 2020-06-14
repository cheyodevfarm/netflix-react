import React from "react";
import "../styles/card.css";

const card = ({ movie }) => {
  return (
    <div className="cards-bg">
      <img src={movie.Poster} alt={movie.Title} />
      <div className="cards-content">
        <h3>{movie.Title}</h3>
        <p>
          {movie.Year}, {movie.Type}
        </p>
      </div>
    </div>
  );
};

export default card;
