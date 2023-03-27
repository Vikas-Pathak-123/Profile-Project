import React from "react";
import { Link } from "react-router-dom";
import "../Post/PostsDetailPage.css";
const PostsDetailPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">Posts Detail Page</h1>
        <p className="not-found-message">Coming soon...</p>
        <Link to="/">
          <button>Back to Landing Page</button>
        </Link>
      </div>
    </div>
  );
};

export default PostsDetailPage;
