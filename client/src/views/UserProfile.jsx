import React from "react";
import NavBar from "../components/NavBar";
import user from "../assets/user.png";
import style from "./Styles/UserProfiles.module.css";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.setItem("idSession", "");
    localStorage.setItem("fullname", "");
    localStorage.setItem("email", "");

    localStorage.setItem(
      "userData",
      JSON.stringify({
        fullname: "",
        email: "",
        password: "",
      })
    );
    navigate("/login");
  };

  return (
    <div>
      <NavBar />
      <h1>Profile</h1>
      <div>
        <img src={user} alt="Pofile" />
        <h2>Name</h2>
        <h2>email</h2>
        <button className={style.signOut} onClick={handleSignOut}>
          Sign out
        </button>
      </div>
    </div>
  );
}
