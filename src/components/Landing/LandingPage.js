import React from "react";
import { Link } from "react-router-dom";
import "../Landing/LandingPage.css";
import { useUser } from "../../utils/context";

const LandingPage = () => {
  const users = useUser();

  return (
    <>
      {/* <h1>Landing Page</h1> */}
      <div className="container">
        <div className="user-card-outer">
          <div className="lable-div">Select an Account</div>
          <div className="user-card">
            {users.map((user) => (
              <Link to={`/users/${user.id}`} key={user.id}>
                <div className="user-list">
                  <img src={user.profilepicture} alt={user.name} />
                  <h3>{user.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
