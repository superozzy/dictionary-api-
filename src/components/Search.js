import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import SearchContext from "../context/SearchWordContext";

const Search = () => {
  const { handleSearch, setMeaning } = useContext(SearchContext);
  return (
    <div className="search">
      <input
        type="text"
        className="search-input"
        onChange={(e) => setMeaning(e.target.value)}
        placeholder="Search any word"
      />
      <FaSearch className="search-icon" onClick={handleSearch} />
    </div>
  );
};

export default Search;
