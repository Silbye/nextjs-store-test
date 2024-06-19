"use client";

import { useContext, useState } from "react";
import { PageContext } from "../context/PageContext";

const SearchBar = () => {
  const [value, setValue] = useState("");

  const { handleSearch } = useContext(PageContext);

  return (
    <div className="search">
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
      <button onClick={() => handleSearch(value)}>Search</button>
    </div>
  );
};

export default SearchBar;
