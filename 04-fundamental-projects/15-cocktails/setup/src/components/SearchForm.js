import React, { useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const searchValue = useRef("");

  return (
    <section className="section search">
      <form action="" className="search-form">
        {" "}
      </form>
    </section>
  );
};

export default SearchForm;
