import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import InfoDisplay from "../InfoDisplay/InfoDisplay";

export default function Main({ onArtistSearch = () => {}, artistData, error }) {
  return (
    <main className="main">
      <SearchForm onArtistSearch={onArtistSearch} />
      <InfoDisplay artistData={artistData} error={error} />
    </main>
  );
}

