import React from "react";
import Producto from "../components/Producto";

const Search = ({ params }) => {
  return <Producto keyword={params.keyword} />;
};

export default Search;
