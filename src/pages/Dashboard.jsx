import React from "react";
import Favorites from "../components/Favorites";
import { UserAuth } from "../context/AuthContext";
const Dashboard = () => {
  const { user } = UserAuth();
  return (
    <div className=" h-screen w-full text-2xl font-bold text-white">
      <div className="h-[400px] w-full relative bg-red-700 flex items-center justify-center">
        <img
          className="absolute top-0 left-0 max-h-[400px] w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
        />
        <h1 className="text-4xl z-10 rounded-lg shadow-2xl shadow-red-900 bg-slate-800/90 p-6">
          Welcome <span className="text-red-800">{user.email}</span>
        </h1>
      </div>
      <Favorites />
    </div>
  );
};

export default Dashboard;
