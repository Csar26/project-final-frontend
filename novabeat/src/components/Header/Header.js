import React from "react";
import Logo from "../../Images/logo_Novabeat.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="place-logo_header">
        <img src={Logo} alt="Logo Novabeat" className="logo" />
      </div>
    </header>
  );
}
