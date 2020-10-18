import React from "react";

// import Card css
import "./Card.css";

const Card = (props) => {
  const { imgURL, brand, description, price } = props;
  return (
    <article className="card">
      <img className="image" src={imgURL} alt="" width="300" height="325" />
      <div className="text">
        <span className="brand">{brand}</span>
        <span> - </span>
        <span className="description">{description}</span>
      </div>
      <div className="price">{price}</div>
    </article>
  );
};

export default Card;
