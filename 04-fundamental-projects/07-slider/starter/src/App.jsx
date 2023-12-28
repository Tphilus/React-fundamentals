import { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import longList from "./data";
const App = () => {
  const [people, setPeople] = useState(longList);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="slider-container">
      <div className="title">
        <h2>
          <span>/</span> reviews
        </h2>
      </div>
      <div className=" section-center">
        {longList.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length)
          ) {
            position = "lastSlide";
          }
          console.log(person);
          // more stuff coming up
          return (
            <article className={position} key={id}>
              <img src={image} alt={title} className="person-img" />
              <h4>{name}</h4>
              <p className="title"> {title} </p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          {" "}
          <FiChevronLeft />{" "}
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          {" "}
          <FiChevronRight />{" "}
        </button>
      </div>
    </section>
  );
};
export default App;
