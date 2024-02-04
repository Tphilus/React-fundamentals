import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  // ========= Filter Length < 1 ======= //
  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no products matched your search...
      </h5>
    );
  }

  // ===== Grid View Section ========== //
  if (grid_view === false) {
    return <ListView products={products} />;
  }
  return <GridView products={products}>Product List</GridView>;
};

export default ProductList;
