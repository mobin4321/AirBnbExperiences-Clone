import React from "react";
import logo from "./images/airbnb-logo.png";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <img src={logo} alt="" />
      </nav>
    </header>
  );
}
