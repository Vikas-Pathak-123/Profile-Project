import React from "react";
import { Link } from "react-router-dom";
import "../NotFound/NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404 - Page Not Found</h1>
        <p className="not-found-message">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link to="/">
          <button>Back to Landing Page</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
