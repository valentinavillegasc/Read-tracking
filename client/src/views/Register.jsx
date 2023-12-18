import React from "react";
import style from "./Styles/Register.module.css";
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <div className={style.register}>
      <div className={style.contenedorRegister}>
        <h2>Read Trakcer</h2>
        <h1>Register</h1>
        <form className={style.form}>
          <div className={style.formGroup}>
            <label htmlFor="">Full Name</label>
            <input type="name" placeholder="Pepito Perez" />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="">Email</label>
            <input type="email" placeholder="example@mail.co" />
          </div>

          <div className={style.formGroup}>
            <label htmlFor="">Password</label>
            <input type="password" placeholder="************" />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="">Repeat Password</label>
            <input type="password" placeholder="************" />
          </div>
        </form>
        <button>Register</button>

        <Link className={style.link} to="/login">
          <p>Already have an account?</p>
        </Link>
      </div>
    </div>
  );
}
