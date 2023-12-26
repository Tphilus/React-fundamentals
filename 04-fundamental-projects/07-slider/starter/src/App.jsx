import { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import longList from "./data";
const App = () => {
  const [people, setPeople] = useState(longList);
  const [index, setIndex] = useState(0);
  return (
    <section className=" slick-container">
      <div className="title">
        <h2>
          <span>/</span> reviews
        </h2>
      </div>
      <div className="slider-container">
        {longList.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          console.log(person);
          // more stuff coming up
          return (
            <article key={id}>
              <img src={image} alt={title} className="person-img" />
              <h4>{name}</h4>
              <p className="title"> {title} </p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev">
          {" "}
          <FiChevronLeft />{" "}
        </button>
        <button className="next">
          {" "}
          <FiChevronRight />{" "}
        </button>
      </div>
    </section>
  );
};
export default App;
