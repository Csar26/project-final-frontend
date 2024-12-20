import React from "react";
import { Route, Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <div className="navigation-home">
        <Link to="/" className="navigation-about">
          Home
        </Link>
      </div>
      <div className="navigation-about">
        <Link to="/about" className="navigation-about">
          About
        </Link>{" "}
      </div>
    </div>
  );
}
