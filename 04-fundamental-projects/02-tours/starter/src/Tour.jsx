import React, { useState } from "react";

export default function Tour({ id, image, info, price, name, removeTour }) {
  const [readMore, setReadMovie] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price"> ${price} </h4>
          <p> {readMore ? info : `${info.substring(0, 200)}...`} </p>
          <button onClick={() => setReadMovie(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </div>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          {" "}
          not interested{" "}
        </button>
      </footer>
    </article>
  );
}
