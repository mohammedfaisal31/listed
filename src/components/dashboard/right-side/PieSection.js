import React, { useEffect, useState } from "react";
import PieChartSection from "./PieChartSection";
import { FaGreaterThan } from "react-icons/fa";
import ScheduleList from "./ScheduleList";
import axios from "axios";
const PieSection = () => {
    const [selectedMonthOption, setSelectedMonthOption] = useState('');
    const [randomNumbers1, setRandomNumbers1] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response1 = await axios.get('http://kisargo.ml/api/randomNumber');
          const randomNumber1 = response1.data.number;
  
          const randomNumbersList1 = Array.from({ length: 4 }, () => Math.floor(Math.random() * 100));
          
  
          // Replace one of the random numbers with the API response number
          const randomIndex1 = Math.floor(Math.random() * 4);
          randomNumbersList1[randomIndex1] = randomNumber1;
          setRandomNumbers1(randomNumbersList1);
          
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
    <div className="flex h-40 mb-10">
      <div className="w-1/2 ">
        <div className="flex flex-col">
          <div className="h-1/4 flex items-center justify-between px-4">
            <h2 className="text-xl mr-auto font-bold">Top brands</h2>
            <select className="border border-gray-300 rounded py-1 px-2 bg-white ml-auto text-gray-500"
            value={selectedMonthOption}
            onChange={handleOptionChange}>
              <option value="date1">May-June 2023</option>
              <option value="date2">June-July 2023</option>
              <option value="date3">July-August 2023</option>
            </select>
          </div>

          <div className="h-3/4  mt-5">
            <div className="flex">
              <PieChartSection dataList={randomNumbers1}/>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="h-1/4 flex items-center justify-between px-4">
          <h2 className="text-xl mr-auto font-bold">Today's schedule</h2>
          <button className="border border-gray-300 rounded py-1 px-2 bg-white ml-auto">
            <div className="flex text-gray-400">
              <span>See All</span>
              <span className="mt-1 ml-2">
                <FaGreaterThan />
              </span>
            </div>
          </button>
        </div>

        <div className="h-3/4  mt-5">
          <ScheduleList />
        </div>
      </div>
    </div>
  );
};

export default PieSection;
