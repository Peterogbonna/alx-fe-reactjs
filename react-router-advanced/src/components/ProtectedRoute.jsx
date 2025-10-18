// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

// ✅ Simulated authentication hook
export function useAuth() {
  // For demonstration: change this to false to simulate a logged-out user
  const [isAuthenticated] = React.useState(true);
  return { isAuthenticated };
}

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  // ✅ If not logged in, redirect to home
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // ✅ Otherwise, render protected content
  return children;
};

export default ProtectedRoute;
