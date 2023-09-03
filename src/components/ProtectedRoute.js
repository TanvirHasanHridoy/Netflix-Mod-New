import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const {user} = UserAuth()
    console.log("information about the user")
    console.log(user)
  if (!user) {
    return <Navigate to='/' />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
