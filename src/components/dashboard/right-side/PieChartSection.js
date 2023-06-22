import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

export default function PieChartSection({dataList}) {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const labels = ["H&M", "Nike", "Max", "TRENDZ"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Graph line 1",
        data: dataList,
        backgroundColor: ["#99D89F", "#F7DC7C", "#EF8485", "#6972C3"],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <>
      <div className="w-1/2 mb-10">
        <Pie data={data} options={options} />
      </div>
      <div className="w-1/2 ">
        <div className="ml-20 mt-20 ">
          {data.labels.map((label, index) => (
            <div key={index} className="flex items-center mb-4 text-2xl">
              <div
                className="w-3 h-3 rounded-full mr-2 "
                style={{
                  backgroundColor: data.datasets[0].backgroundColor[index],
                }}
              />
              <span className="font-bold">{label}</span>
              <span className="ml-2 text-gray-500 text-base">{`${(
                (data.datasets[0].data[index] /
                  data.datasets[0].data.reduce((a, b) => a + b, 0)) *
                100
              ).toFixed(0)}%`}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
