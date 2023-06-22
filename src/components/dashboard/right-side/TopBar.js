import React from "react";
import { CgProfile } from "react-icons/cg";
import { GrNotification } from "react-icons/gr";
import { AiOutlineLogout } from "react-icons/ai";

export default function TopBar({sendDataToParent}) {
  
  const handleLogout = (e)=>{
    alert("logout")
    sendDataToParent({});
  }
  
  return (
    <div className=" h-10  flex justify-between items-center pr-4 mb-5">
      <div className="text-custom-for-bar font-bold ml-4">Dashboard</div>
      <div className="flex items-center space-x-4 ">
        {/* Search bar */}
        <div className="relative ">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-1 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-custom-for-search-bar"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 15a7 7 0 100-14 7 7 0 000 14zM6.338 2.477a5 5 0 017.07 7.072l5.498 5.497a1 1 0 01-1.414 1.414l-5.497-5.498a5 5 0 01-7.071-7.07z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>

        {/* Notification icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-90 w-10 mt-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <GrNotification />
        </svg>

        {/* Profile icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 mt-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <CgProfile />
        </svg>
        <button onClick={handleLogout}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 mt-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          
        >
          <AiOutlineLogout />
        </svg>
        </button>
      </div>
    </div>
  );
}
