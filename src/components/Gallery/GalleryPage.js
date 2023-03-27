import React from "react";
import { Link } from "react-router-dom";
import "../Gallery/GalleryPage.css";

const GalleryPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">GalleryPage</h1>
        <p className="not-found-message">Coming soon...</p>
        <Link to="/">
          <button>Back to Landing Page</button>
        </Link>
      </div>
    </div>
  );
};

export default GalleryPage;
