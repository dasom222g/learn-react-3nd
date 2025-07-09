import React from "react";

const Card = ({ imgSrc, title, text }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} />
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{text}</p>
    </div>
  );
};

export default Card;
