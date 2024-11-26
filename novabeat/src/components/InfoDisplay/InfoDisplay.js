import React from "react";
import ArtistPhoto from "../Images/img_card_1.svg"




export default function InfoDisplay ({
  name, followers, gender, images
}){
  
  const artistImage = images && images[0] ? images[0].url : ArtistPhoto;


  return(
    <div className='infodisplay'>
      <div className="artist-info">
        <img src={artistImage} alt="Artist picture" className="artist-name"/>
     
        <h2 className="artist-name">{name}</h2>
        <p className="artist-followers">Followers: {followers}</p>
        <p className="artist-genres">Genres: {gender}</p>
      </div>
    </div>
  );

}