import React from "react";
import AboutImage from "../../Images/about_image.svg";
import EarphonesImage from "../../Images/Novabeat_logo.svg";

export default function About() {
  return (
    <about className="about">
      <p className="about-description">
        Novabeat is your go-to platform for discovering the stories behind the
        music. Our mission is to provide in-depth information about the artists
        who shape the sound of today. Here, you'll find detailed profiles, from
        their musical journey and influences to their latest works and upcoming
        projects. Whether you're a longtime fan or new to their music, Novabeat
        offers a closer look at the artists you love, bringing their stories and
        sounds to life
      </p>

      <img src={EarphonesImage} alt="Earphones" className="about_earphones" />

      <img src={AboutImage} alt="artists" className="about_image" />
    </about>
  );
}
