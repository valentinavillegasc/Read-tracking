import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating.jsx";
export default function Book(props) {
  return (
    <Link>
      <div>
        <img src={props.portada} alt="" />
        <h2>{props.title}</h2>
        <p>{props.rating}</p>
        <Rating readOnly={true} initialRating={props.rating} />
      </div>
    </Link>
  );
}
