import React from "react";
import Tour from "./Tour";

export default function Tours({ tours, removeTour }) {
  return (
    <div>
      <section>
        <div className="title">
          <h2>ours tours</h2>
          <div className="title-underline"></div>
        </div>
        <div className="tours">
          {tours?.map((tour) => {
            return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
          })}
        </div>
      </section>
    </div>
  );
}
