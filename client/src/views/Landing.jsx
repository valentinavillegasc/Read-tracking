import React from "react";
import NavBar from "../components/NavBar";
import style from "./Styles/Landing.module.css";
import down from "../assets/flechaAbajo.png";
import right from "../assets/flechaDerecha.png";
export default function Landing() {
  return (
    <div>
      <NavBar />
      <section className={style.title}>
        <div className={style.titles}>
          <h2>Welcome to</h2>
          <h1>Read tracker</h1>
          <h2>Explore, Record, and Connect with Your Literary Journey.</h2>
        </div>
        <a href="#functions">
          <img src={down} alt="Row down" className={style.down} />
        </a>
      </section>
      <section id="functions">
        <div className={style.description}>
          <p>
            Discover all the incredible features that{" "}
            <strong>Read tracker</strong> has to offer you.
          </p>
          <img src={right} alt="row right" className={style.right} />
        </div>
        <div className={style.functions}>
          <div className={style.function}></div>
          <div className={style.function}></div>
          <div className={style.function}></div>
          <div className={style.function}></div>
          <div className={style.function}></div>
        </div>
      </section>
    </div>
  );
}
