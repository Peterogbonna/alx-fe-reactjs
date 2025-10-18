import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

function Profile() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>👤 Profile Page</h2>

      {/* Navigation links for nested routes */}
      <nav style={{ marginBottom: "15px" }}>
        <Link to="details" style={{ marginRight: "10px" }}>
          Profile Details
        </Link>
        <Link to="settings">Profile Settings</Link>
      </nav>

      {/* Nested routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>

      {/* Optional Outlet if used by parent routes */}
      <Outlet />
    </div>
  );
}

export default Profile;
