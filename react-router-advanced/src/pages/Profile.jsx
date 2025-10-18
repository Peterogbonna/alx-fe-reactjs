// src/pages/Profile.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h2>User Profile</h2>
      <nav>
        <Link to="details">Profile Details</Link> |{" "}
        <Link to="settings">Profile Settings</Link>
      </nav>

      {/* Nested content will show here */}
      <Outlet />
    </div>
  );
}

export default Profile;
