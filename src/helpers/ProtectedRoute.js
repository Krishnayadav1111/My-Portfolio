import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children, roles, isAuthenticated }) => {
  const userRoles = useSelector((state) => state.profile.userRoles);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; // Redirect to login on unauthenticated access
  }

  if (roles && !roles.some((role) => userRoles.includes(role))) {
    return <Navigate to="/unauthorized" replace />; // Redirect to unauthorized page if roles don't match
  }

  return children ? children : <Outlet />; // Render children or nested routes
};

export default ProtectedRoute;
