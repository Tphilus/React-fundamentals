import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function List({ items, removeItem, editItem }) {
  return (
    <div className="items">
      {items?.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="single-item">
            <p className="title"> {title} </p>
            <div className="btn-container">
              <button type="button" className="" onClick={() => editItem(id)}>
                <FaEdit />
              </button>
              <button type="button" className="" onClick={() => removeItem(id)}>
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
