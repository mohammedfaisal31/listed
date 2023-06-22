import React from "react";

const ScheduleList = () => (
  <ul>
    <li className="relative pl-4 mb-8 ">
      <div
        className={`border-l-2 border-amber-200 border-8 absolute h-full left-0 top-0 `}
      ></div>
      <p className="font-bold text-xl mb-2 ml-4">
        Meeting with suppliers from Goa
      </p>
      <p className="text-gray-500 text-base mb-1 ml-4">14:00 - 16:00</p>
      <p className="text-gray-500 text-base mb-1 ml-4">
        at Shangri La, Bangalore
      </p>
    </li>

    <li className="relative pl-4 mb-8 ">
      <div
        className={`border-l-2 border-indigo-500 border-8 absolute h-full left-0 top-0 `}
      ></div>
      <p className="font-bold text-xl mb-2 ml-4">Operation survey</p>
      <p className="text-gray-500 text-base mb-1 ml-4">18:00 - 19:00</p>
      <p className="text-gray-500 text-base mb-1 ml-4">
        at chancery pavilion, Bangalore
      </p>
    </li>
  </ul>
);

export default ScheduleList;
