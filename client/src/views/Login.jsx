import React from "react";
import style from "./Styles/Login.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className={style.login}>
      <div className={style.contenedorLogin}>
        <h2>Read Trakcer</h2>
        <h1>Login</h1>
        <form className={style.form}>
          <div className={style.formGroup}>
            <label htmlFor="">Email</label>
            <input type="email" placeholder="example@mail.co" />
          </div>

          <div className={style.formGroup}>
            <label htmlFor="">Password</label>
            <input type="password" placeholder="************" />
          </div>
        </form>
        <button>Login</button>
        <div>
          <Link className={style.link}>
            <p>Forgot your password?</p>
          </Link>
          <Link className={style.link} to="/register">
            <p>Don't have an account yet?</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
