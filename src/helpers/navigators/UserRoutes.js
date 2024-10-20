import React from 'react';
import ProtectedRoute from 'helpers/ProtectedRoute';
import { Route, Routes } from 'react-router-dom';
import UserDashboard from 'pages/userpage/UserDashboard';
import UserDetails from 'pages/userpage/UserDetails';



const UserRoutes = ({roles,isAuthenticated}) => {
  return (
    <ProtectedRoute isAuthenticated={isAuthenticated} roles={roles}>
      <Routes>
        <Route path="/" element={<UserDashboard />} />
        <Route path="details" element={<UserDetails/>} /> 

        
        {/* ... other nested routes */}
      </Routes>
    </ProtectedRoute>
  );
};

export default UserRoutes;