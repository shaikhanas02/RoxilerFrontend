import React from "react";

const SearchBar = ({ handleSearch }) => {
  return (
    
    <input
    className=""
    type="text"
    placeholder="Search..."
    onChange={(e) => handleSearch(e.target.value)}
    />
    
    
  );
};

export default SearchBar;


