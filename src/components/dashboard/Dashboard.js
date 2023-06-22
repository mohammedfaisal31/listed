import React from "react";
import Navbar from "./left-side/Navbar";
import Dashmap from "./right-side/Dashmap";

const Dashboard = ({sendDataToParent}) => {
  const handleDataFromChild = (data) => {
    sendDataToParent(data);
  };
  return (
    <div className="bg-gray-100 m-7 h-screen flex">
      <Navbar />
      <Dashmap sendDataToParent={handleDataFromChild}/>
    </div>
  );
};

export default Dashboard;
