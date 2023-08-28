import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Header from "./Header";
import Hero from "./Hero";
import Card from "./Card";
import data from "./data";

const Page = () => {
  const cards = data.map((item) => <Card key={item.id} {...item} />);
  return (
    <div className="container">
      <div className="window">
        <Header />
        <Hero />
        <div className="cards">{cards}</div>
      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
