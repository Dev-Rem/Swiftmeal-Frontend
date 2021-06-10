import React, { useState, useEffect } from "react";
import "./searchBar.css";

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearClick = () => {
    setSearchValue("");
  };

  const shouldDisplayButton = searchValue.length > 0;

  const filterNames = props.names.filter((names) => {
    return names.includes(searchValue);
  });

  return (
    <div>
      <input type="text" value={searchValue} onChange={handleInputChange} />
      {shouldDisplayButton && <button onClick={handleClearClick}>Clear</button>}

      <ul>
        {filterNames.map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
    </div>
  );
};

export default SearchBar;
