import React, { useState, useEffect } from "react";
import thirdpartyapi from "../../utils/ThirdPartyApi";

export default function Searchform() {
  const [searchArtist, setSearchArtist] = useState("");

  const handleChange = (event) => {
    setSearchArtist(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit', searchArtist);
    thirdpartyapi.search(searchArtist).then((data) => {
      console.log("APIA response", data);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Search for Artist"></label>
        <input
          placeholder="Search your favorite artist"
          name="name"
          type="text"
          value={searchArtist}
          onChange={handleChange}
          className="search-form"
        />
      </form>
    </div>
  );
}
