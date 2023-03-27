import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Navigation/Navigation.css";
import DropdownMenu from "../Dropdown/DropdownMenu";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="navbar">
      <div className="navbar__title navbar__item">User Profile</div>
      <div className={`navbar__item ${showMenu ? "navbar__item--show" : ""}`}>
        <Link to="/post">Post</Link>
      </div>
      <div className={`navbar__item ${showMenu ? "navbar__item--show" : ""}`}>
        <Link to="/gallery"> Gallery</Link>
      </div>
      <div className={`navbar__item ${showMenu ? "navbar__item--show" : ""}`}>
        <Link to="/todo">Todo</Link>
      </div>
      <div className={`navbar__item ${showMenu ? "navbar__item--show" : ""}`}>
        <DropdownMenu />
      </div>
      <button
        className={`navbar__menu-icon ${
          showMenu ? "navbar__menu-icon--close" : ""
        }`}
        onClick={handleMenuClick}
      >
        {showMenu ? <>×</> : <>☰</>}
      </button>
    </header>
  );
};

export default Navigation;
