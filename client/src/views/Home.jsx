import React from "react";
import Books from "../components/Books";
import cover from "../assets/book1.webp";
import NavBar from "../components/NavBar";
import style from "./Styles/Home.module.css";

const books = [
  {
    title: "It ends with us",
    author: "Colleen",
    rating: 4,
    cover: cover,
  },
  {
    title: "It starts with us",
    author: "Colleen",
    rating: 0,
    cover: cover,
  },
  {
    title: "Im glad my mom died",
    author: "Jennette",
    rating: 3,
    cover: cover,
  },
];

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className={style.home}>
        <div className={style.bar}>
          <h2>My books</h2>
          <p>Filters</p>
        </div>

        <Books books={books} />
      </div>
    </div>
  );
}
