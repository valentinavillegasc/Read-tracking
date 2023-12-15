import React from "react";
import { Link } from "react-router-dom";
import style from "./Styles/NavBar.module.css";
export default function NavBar() {
  return (
    <nav>
      <h1 className={style.logo}>Read Tracker</h1>
      <div className={style.menu}>
        <Link className={style.option}> Login</Link>
        <Link className={style.option}> Register</Link>
      </div>
    </nav>
  );
}
