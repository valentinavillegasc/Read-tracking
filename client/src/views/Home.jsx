import React, { useEffect } from "react";
import Books from "../components/Books";
import cover from "../assets/book1.webp";
import NavBar from "../components/NavBar";
import style from "./Styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../redux/actions";

export default function Home() {
  const books = useSelector((state) => state.allBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
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
