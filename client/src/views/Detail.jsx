import React from "react";
import cover from "../assets/book1.webp";
import NavBar from "../components/NavBar";
import Rating from "../components/Rating";
import openbook from "../assets/openedBook.png";
import headphones from "../assets/headphones.png";
import digital from "../assets/kindle.png";
import style from "./Styles/Detail.module.css";

const book = {
  id: 1,
  title: "It ends with us",
  author: "Colleen",
  rating: 4,
  cover: cover,
  genre: "Romance",
  format: ["paper"],
  sinopsis:
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius obcaecati iure a animi vitae saepe repellat illo eum dolorem Quisquam cupiditate sequi, rem sed omnis odit dolores illum impedit culpa",
  review:
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius obcaecati iure a animi vitae saepe repellat illo eum dolorem Quisquam cupiditate sequi, rem sed omnis odit dolores illum impedit culpa",
  quotes: ["Hola hola hola hola", "chao chao chao"],
};

export default function Detail() {
  return (
    <div>
      <NavBar />
      <section className={style.detail}>
        <div className={style.cover}>
          <img src={book.cover} alt="" />
          <Rating readOnly={true} initialRating={book.rating} size="3rem" />
        </div>
        <div>
          <div className={style.titles}>
            <h1>{book.title}</h1>
            <h3>By {book.author}</h3>
          </div>

          <div className={style.info}>
            <h3>Genre: {book.genre}</h3>
            <div className={style.dates}>
              <h3>Start date: </h3>
              <h3>End date:</h3>
            </div>

            <div className={style.formats}>
              <h3>Format:</h3>
              <div className={style.formatos}>
                <img className={style.format} src={openbook} alt="" />
                <input
                  type="checkbox"
                  name="paper"
                  id="paperCheckbox"
                  checked={book.format.includes("paper")}
                  readOnly
                />
              </div>
              <div className={style.formatos}>
                <img className={style.format} src={headphones} alt="" />
                <input
                  type="checkbox"
                  name="audio"
                  id="audioCheckbox"
                  checked={book.format.includes("audio")}
                  readOnly
                />
              </div>
              <div className={style.formatos}>
                <img className={style.format} src={digital} alt="" />
                <input
                  type="checkbox"
                  name="digital"
                  id="digitalCheckbox"
                  checked={book.format.includes("digital")}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style.texts}>
        {book.sinopsis && (
          <div className={style.text}>
            <h3>Sinopsis</h3>
            <p>{book.sinopsis}</p>
          </div>
        )}
        {book.review && (
          <div className={style.text}>
            <h3>Review</h3>
            <p>{book.review}</p>
          </div>
        )}
        {book.quotes && book.quotes.length > 0 && (
          <div className={style.text}>
            <h3>Quotes</h3>
            {book.quotes.map((quote, index) => (
              <p key={index} className={style.quote}>
                {quote}
              </p>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
