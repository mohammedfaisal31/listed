import React from "react";
import {
  FaHome,
  FaMoneyBill,
  FaCalendarAlt,
  FaUsers,
  FaCog,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div
      className="w-1/6 bg-black rounded-[30px] font-navbar"
    >
      <div className="flex flex-col mt-8 ml-10">
        <h1 className="text-white text-custom font-bold mb-20">Board.</h1>
        <ul className="space-y-6 mb-40">
          <li className="flex text-2xl items-center text-white opacity-75 hover:opacity-100">
            <FaHome className="mr-4" />
            Dashboard
          </li>
          <li className="flex text-2xl items-center text-white opacity-75 hover:opacity-100">
            <FaMoneyBill className="mr-4" />
            Transactions
          </li>
          <li className="flex text-2xl items-center text-white opacity-75 hover:opacity-100">
            <FaCalendarAlt className="mr-4" />
            Schedules
          </li>
          <li className="flex text-2xl items-center text-white opacity-75 hover:opacity-100">
            <FaUsers className="mr-4" />
            Users
          </li>
          <li className="flex text-2xl items-center text-white opacity-75 hover:opacity-100 ">
            <FaCog className="mr-4" />
            Settings
          </li>
        </ul>

        <ul className="space-y-5 mt-100">
          <li className="flex text-xl items-center text-white opacity-75 hover:opacity-100">
            Help
          </li>
          <li className="flex text-xl items-center text-white opacity-75 hover:opacity-100">
            Contact Us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
