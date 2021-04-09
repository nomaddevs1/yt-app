import React, { useState } from "react";

const SearchBar = ({ val, onClick, onTerm }) => {
  const [searchQuery, setSearchQuery] = useState("Building");

  const handleChange = (e) => {
    const searchQuery = e.target.value;
    setSearchQuery(searchQuery);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
    onTerm(searchQuery);
  };
  return (
    <div className="ui segment searchBar">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="video search">Search for a video</label>
          <input type="text" onChange={handleChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
