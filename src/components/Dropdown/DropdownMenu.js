import React, { useState } from "react";
import "../Dropdown/DropdownMenu.css";
import { useParams } from "react-router-dom";
import { useUser } from "../../utils/context";

function DropdownMenu() {
  const { id } = useParams();
  const users = useUser();
  const user = users.find((user) => user.id === parseInt(id, 10));

  const [showDropdown, setShowDropdown] = useState(false);
  const [keepDropdown, setKeepDropdown] = useState(false);

  const handleSignOut = () => {
    // Implement sign out logic here, such as clearing user data from local storage
    window.location.href = "/"; // Redirect to landing page
  };

  const handleMouseLeave = () => {
    if (!keepDropdown) {
      setShowDropdown(false);
    }
  };

  return (
    <div className="user-profile" onMouseLeave={handleMouseLeave}>
      <div
        className="user-info"
        onClick={() => {
          setShowDropdown(!showDropdown);
          setKeepDropdown(true);
        }}
        onMouseEnter={() => setKeepDropdown(true)}
      >
        <img src={user.profilepicture} alt="Profile" />
        <p>{user.name}</p>
        {showDropdown ? (
          <div
            style={{ paddingLeft: "1rem", display: "flex", flexWrap: "wrap" }}
          >
            <span>@{user.username}</span>&nbsp;&nbsp;
            <span className="signOut__btn" onClick={handleSignOut}>
              Sign Out
            </span>
          </div>
        ) : null}
      </div>
      {showDropdown ? (
        <div className="other-users">
          <h2>Other Users:</h2>
          {users.map((otherUser) => {
            if (otherUser.id !== user.id) {
              return (
                <div key={otherUser.username}>
                  <img
                    src={otherUser.profilepicture}
                    alt={otherUser.username}
                  />
                  <p>
                    {otherUser.name} (@{otherUser.username})
                  </p>
                </div>
              );
            } else {
              return null; // don't render current user in list
            }
          })}
        </div>
      ) : null}
    </div>
  );
}

export default DropdownMenu;
