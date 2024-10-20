import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = ({ children, roles, isAuthenticated }) => {

  if (roles && !roles.some((role) => userRoles.includes(role))) {
    return <Navigate to="/unauthorized" replace />; // Redirect to unauthorized page if roles don't match
  }

  if (isAuthenticated) {
    return <Navigate to="/" replace />; // Redirect to login on unauthenticated access
  }

  return children ? children : <Outlet />; // Render children or nested routes
};

export default PublicRoute;
