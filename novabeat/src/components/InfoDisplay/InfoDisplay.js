import React from "react";
import ArtistPhoto from "../Images/img_card_1.svg";

export default function InfoDisplay({ artistData, error }) {
  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!artistData) {
    return <div>Search for an artist to display information</div>;
  }

  const artistImage = artistData.images && artistData.images.length > 0 
    ? artistData.images[0].url 
    : ArtistPhoto;

  return (
    <div className='infodisplay'>
      <div className="artist-info">
        <img 
          src={artistImage} 
          alt="Artist" 
          className="artist-image"
        />
        <h2 className="artist-name">{artistData.name}</h2>
        <p className="artist-followers">
          Followers: {artistData.followers.total.toLocaleString()}
        </p>
        <p className="artist-genres">
          Genres: {artistData.genres.join(", ") || "No genres specified"}
        </p>
      </div>
    </div>
  );
}

