import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating.jsx";
import style from "./Styles/Book.module.css";
export default function Book(props) {
  return (
    <Link className={style.link}>
      <div className={style.book}>
        <img src={props.cover} alt="cover" />
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
        <Rating readOnly={true} initialRating={props.rating} />
      </div>
    </Link>
  );
}
