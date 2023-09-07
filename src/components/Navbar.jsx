import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const signTheUserOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      <div className="flex justify-center items-center">
        {user?.email ? (
          <Link to="/dashboard">
            <button className="text-white pr-4">Dashboard</button>
          </Link>
        ) : (
          <Link to="/signin">
            <button className="text-white pr-4">Sign In</button>
          </Link>
        )}
        <div>
          {user?.email ? (
            <Link to="/">
              <button
                onClick={signTheUserOut}
                className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white shadow-lg "
              >
                Logout
              </button>
            </Link>
          ) : (
            <Link to="/signup">
              <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white shadow-lg ">
                Sign Up
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
