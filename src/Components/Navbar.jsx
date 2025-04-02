import React from "react";
import { Plus, ChevronDown } from "lucide-react";
import User from "../assets/Image/User.svg";
import Notification from "../assets/Image/Notification.svg";
const Navbar = () => {
  return (
    <header className="flex justify-between items-center mb-2  h-16">
      <div className="relative w-[614px]">
        <button className="absolute p-2 -translate-y-1/2 left-2 top-7">
          <svg
            width="17"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="search"
            className="w-5 h-5 text-customBlue"
          >
            <path
              d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
              stroke="currentColor"
              strokeWidth="1.333"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <input
          className="w-[400px] h-[48px] px-10 py-3 placeholder rgba(128, 130, 129, 1)
 transition-all duration-300 rounded-lg shadow-md input focus:outline-none focus:border-customBlue"
          placeholder="Search Your Course"
          required=""
          type="text"
        />
      </div>
      <div className="flex">
        <img src={Notification} alt="notify" />
        <button className="bg-blue-500 text-white rounded flex items-center h-8 w-8 mt-2 mx-2">
          <Plus className="w-7 h-4" />
        </button>

        <img src={User} alt="profile-icon" className="w-[217px] h-[48px]" />
        <p className="mt-3.5 pl-2">
          {" "}
          <ChevronDown />
        </p>
      </div>
    </header>
  );
};

export default Navbar;
