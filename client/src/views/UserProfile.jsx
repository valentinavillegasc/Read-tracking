import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import user from "../assets/user.png";
import style from "./Styles/UserProfiles.module.css";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const navigate = useNavigate();
  const [userSession, setUserSession] = useState({});
  const [id, setId] = useState("");

  useEffect(() => {
    const id = localStorage.getItem("idSession");
    const user = JSON.parse(localStorage.getItem("userData"));
    setId(id);
    setUserSession(user);
  }, []);

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
      <div className={style.bar}>
        <h1>Profile</h1>
        <p>Edit</p>
      </div>
      <div className={style.profileContainer}>
        <div className={style.profile}>
          <img src={user} alt="Profile" />
          <h2>{userSession.fullname}</h2>
          <h3>{userSession.email}</h3>
          <button className={style.signOut} onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}
