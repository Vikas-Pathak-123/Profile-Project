import React from "react";
import { Link } from "react-router-dom";
import "../Navigation/Navigation.css";
import DropdownMenu from "../Dropdown/DropdownMenu";

const Navigation = () => {
  return (
    <header className="navbar">
      <div className="navbar__title navbar__item">User Profile</div>
      <div className="navbar__item">
        <Link to="/post">Post</Link>
      </div>
      <div className="navbar__item">
        <Link to="/gallery"> Gallery</Link>
      </div>
      <div className="navbar__item">
        <Link to="/todo">Todo</Link>
      </div>
      <div className="navbar__item">
        <DropdownMenu />
      </div>
    </header>
  );
};

export default Navigation;
