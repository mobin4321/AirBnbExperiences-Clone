import React from "react";
import photoGrid from "./images/photo-grid.png";

export default function Hero() {
  return (
    <div className="hero">
      <img src={photoGrid} alt="" />
      <div>
        <h1>Online Experiences</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, qui
        </p>
      </div>
    </div>
  );
}
