import React from "react";
import { assets } from "../assets/assets";

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <img
        className="max-w-[150px] w-full h-auto"
        src={assets.logo}
        alt="Forever Logo"
      />
      <button onClick={() => setToken('')} className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
