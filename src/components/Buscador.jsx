import React from "react";
import { useState } from "react";
import { useLocation } from "wouter";

const Buscador = () => {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        placeholder="buscar producto"
        value={keyword}
      />
      <button>buscar</button>
    </form>
  );
};

export default Buscador;
