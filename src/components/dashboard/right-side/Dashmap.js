import React from "react";
import TopBar from "./TopBar";
import CardsSection from "./CardsSection";
import ChartSection from "./ChartSection";
import PieSection from "./PieSection";
const Dashmap = ({sendDataToParent}) => {
  const handleDataFromChild = (data) => {
    sendDataToParent(data);
  };
  return (
    <div className="w-5/6 bg-gray-100 ml-7 font-dashboard">
      <TopBar sendDataToParent={handleDataFromChild} />
      <CardsSection />
      <ChartSection />
      <PieSection />
    </div>
  );
};

export default Dashmap;
