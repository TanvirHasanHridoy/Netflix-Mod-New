import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Redirect = ({ children }) => {
  const { user } = UserAuth();
  console.log(user);
  if (user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default Redirect;
