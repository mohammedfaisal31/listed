import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);
export default function LinearChart({dataList1,dataList2}) {
  
  
  
  const labels = [
    "Week 1",
    "Week 2",
    "Week 3",
    "Week 4"
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Graph line 1",
        data: dataList1,
        fill: false,
        borderColor: "#9BDD7C",
        backgroundColor: "transparent",
        pointBorderColor: "transparent",
      },
      {
        label: "Graph line 2",
        data: dataList2 ,
        fill: false,
        borderColor: "#E8A1A0",
        backgroundColor: "transparent",
        pointBorderColor: "transparent",
      },
    ],
  };
  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        type: "category",
        offset: true,
        ticks: {
          barPercentage: 0.1, // Adjust this value to increase/decrease spacing
          categoryPercentage: 0.1, // Adjust this value to increase/decrease spacing
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10, // Adjust this value as needed
        },
      },
    },
  };
  return (
    <div style={{ height: "400px", width: "600px" }}>
      <Line data={data} options={options} />
    </div>
  );
}
