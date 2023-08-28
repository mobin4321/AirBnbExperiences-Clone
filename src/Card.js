import React from "react";
import star from "./images/star.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "Online";
  }
  return (
    <div className="card">
      {badgeText && <div className="badge">{badgeText}</div>}
      <img
        src={require(`./images/${props.coverImg}`)}
        className="card-logo"
        alt=""
      />
      <div className="data">
        <div className="description">
          <img src={star} className="star" alt="" />
          <p>
            <span>{props.stats.rating}&nbsp;</span>
            <span>{"(" + props.stats.reviewCount + ")"}&nbsp;</span>
            <span>-&nbsp;</span>
            <span>{props.location}&nbsp;</span>
          </p>
        </div>
        <p className="detail">{props.title}</p>
        <p className="price">
          <span className="bold">From {"$" + props.price} </span>/ person
        </p>
      </div>
    </div>
  );
}
