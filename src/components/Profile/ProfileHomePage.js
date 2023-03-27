import React from "react";
import { useParams, Link } from "react-router-dom";
import { useUser } from "../../utils/context";
import Navigation from "../Navigation/Navigation";
import "../Profile/ProfileHomePage.css";

const ProfileHomePage = () => {
  const { id } = useParams();
  const users = useUser();
  const user = users.find((user) => user.id === parseInt(id, 10));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <>
      <Navigation />
      <div className="profile">
        <div className="profile__details">
          <div className="profile__picture-container">
            <img
              className="profile__picture"
              src={user.profilepicture}
              alt={user.name}
            />
            <h1 className="profile__name">{user.name}</h1>
          </div>
          <div className="profile__info">
            <p className="profile__email">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="profile__phone">
              <strong>Phone:</strong> {user.phone}
            </p>
            <p className="profile__address">
              <strong>Address:</strong> {user.address.street},{" "}
              {user.address.suite}, {user.address.city}, {user.address.zipcode}
            </p>
            {/* <p className="profile__geo"><strong>Geo Location:</strong> {user.address.geo.lat}, {user.address.geo.lng}</p> */}
            <p className="profile__website">
              <strong>Website:</strong> {user.website}
            </p>
            <p className="profile__company">
              <strong>Company:</strong> {user.company.name},{" "}
              {user.company.catchPhrase}, {user.company.bs}
            </p>
          </div>
        </div>

        <Link to="/" className="profile__link">
          <button className="profile__button">Back to Landing Page</button>
        </Link>
      </div>
    </>
  );
};

export default ProfileHomePage;
