import React, { useEffect, useState } from "react";
import LinearChart from "./LinearChart";
import { BsDot } from "react-icons/bs";
import axios from 'axios';

export default function ChartSection() {
  const [selectedMonthOption, setSelectedMonthOption] = useState('');
  const [randomNumbers1, setRandomNumbers1] = useState([]);
  const [randomNumbers2, setRandomNumbers2] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get('http://kisargo.ml/api/randomNumber');
        const randomNumber1 = response1.data.number;

        const response2 = await axios.get('http://kisargo.ml/api/randomNumber');
        const randomNumber2 = response2.data.number;
        // Generate a list of four random numbers
        const randomNumbersList1 = Array.from({ length: 4 }, () => Math.floor(Math.random() * 100));
        const randomNumbersList2 = Array.from({ length: 4 }, () => Math.floor(Math.random() * 100));
        

        // Replace one of the random numbers with the API response number
        const randomIndex1 = Math.floor(Math.random() * 4);
        randomNumbersList1[randomIndex1] = randomNumber1;
        setRandomNumbers1(randomNumbersList1);
        
        const randomIndex2 = Math.floor(Math.random() * 4);
        randomNumbersList2[randomIndex2] = randomNumber2;

        setRandomNumbers2(randomNumbersList2);
      } catch (error) {
        console.error('Error fetching random numbers:', error);
      }
    };

    fetchData();
  }, [selectedMonthOption]);

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedMonthOption(value);
  };
  return (
    <div className="h-50">
      <div className="flex flex-col w-full rounded-lg bg-white p-4">
        <h3 className="text-xl font-bold mb-1">Activities</h3>
        <div className="flex items-center mb-4">
          <div className="relative">
            <select className="border border-gray-300 rounded px-2 py-1 focus:outline-none text-gray-500"
              value={selectedMonthOption}
              onChange={handleOptionChange}
            >
              <option value="date1">May-June 2023</option>
              <option value="date2">June-July 2023</option>
              <option value="date3">July-August 2023</option>
            </select>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              {/* Add a dropdown icon */}
              <svg
                className="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Add dropdown icon SVG path */}
              </svg>
            </span>
          </div>
          <div className="flex ml-60">
            <span className="mr-2">
              <div className="flex">
                <BsDot
                  style={{
                    color: "#9BDD7C",
                    fontSize: "30px",
                    fontWeight: "bold",
                  }}
                  className="h-12 w-12"
                />
                <p
                  style={{ fontSize: "20px", fontWeight: "bold" }}
                  className="mt-2"
                >
                  Guest
                </p>
              </div>
            </span>
            <span className="mr-2">
              <div className="flex">
                <BsDot
                  style={{
                    color: "#E8A1A0",
                    fontSize: "30px",
                    fontWeight: "bold",
                  }}
                  className="h-12 w-12"
                />
                <p
                  style={{ fontSize: "20px", fontWeight: "bold" }}
                  className="mt-2"
                >
                  User
                </p>
              </div>
            </span>
          </div>
        </div>
        <LinearChart dataList1={randomNumbers1} dataList2={randomNumbers2} />
      </div>
    </div>
  );
}
