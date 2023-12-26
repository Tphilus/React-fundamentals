import React from "react";

export default function Categories({ filterItems, categories }) {
  return (
    <div className="btn-container">
      {categories?.map((category, index) => {
        return (
          <button
            className="btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
{
  /* <button className="btn" onClick={() => filterItems("all")}>
        all
      </button>
      <button className="btn" onClick={() => filterItems("breakfast")}>
        breakfast
      </button> */
}
