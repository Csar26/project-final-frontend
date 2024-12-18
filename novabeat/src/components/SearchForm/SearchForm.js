import React, { useState } from "react";

export default function SearchForm({ onArtistSearch }) {
  const [searchArtist, setSearchArtist] = useState("");

  const handleChange = (event) => {
    setSearchArtist(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchArtist.trim()) {
      onArtistSearch(searchArtist);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input">Search for Artist</label>
        <input
          placeholder="Search your favorite artist"
          id="search-input"
          name="name"
          type="text"
          value={searchArtist}
          onChange={handleChange}
          className="search-form"
          autoComplete="off"
        />
        <button className="search-form-button" type="submit">Search</button>
      </form>
    </div>
  );
}
