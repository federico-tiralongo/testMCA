import { useState, useEffect } from "react";
import SearchList from "./searchList";
import "./search.css";

const Search = ({ products }) => {
  const [searching, setSearching] = useState("");

  useEffect(() => {}, [searching]);

  function handleSearch(e) {
    setSearching(e.target.value);
  }
  const filteredProducts = products.filter((product) => {
    return product.model.toLowerCase().includes(searching.toLocaleLowerCase());
  });

  return (
    <>
      <div className="input">
        <input
          type={"search"}
          value={searching}
          placeholder={"Busca aquí"}
          onChange={handleSearch}
        />
      </div>
      <SearchList filteredProducts={filteredProducts} />
    </>
  );
};

export default Search;
