import React, { useEffect, useState } from "react";
import { GrTransaction } from "react-icons/gr";
import { TbReportMoney } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";
import axios from "axios";

export default function CardsSection() {
  const [randomNumbers, setRandomNumbers] = useState({
    sixDigits: 0,
    fiveDigits: 0,
    fourDigits: 0,
    threeDigits: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://kisargo.ml/api/randomNumber');
        const randomNumber = response.data.number;

        const sixDigits = Math.floor(Math.random() * 900000) + 100000;
        const fiveDigits = Math.floor(Math.random() * 90000) + 10000;
        const fourDigits = Math.floor(Math.random() * 9000) + 1000;
        const threeDigits = Math.floor(Math.random() * 900) + 100;

        setRandomNumbers({
          sixDigits: sixDigits,
          fiveDigits: fiveDigits,
          fourDigits:  fourDigits,
          threeDigits:  threeDigits
        });
      } catch (error) {
        console.error('Error fetching random numbers:', error);
      }
    };

    fetchData();
  }, []);
  function formatUSD(number) {
    return number.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    }).slice(0, -3);
  }
  function formatNumber(number) {
    return number.toLocaleString('en', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }
  return (
    <div className="h-30 mb-5">
      <div className="flex justify-between h-30 px-4">
        <div
          style={{ backgroundColor: "#DDEFE0" }}
          className="flex w-1/4 rounded-xl-2  text-black mr-10"
        >
          <div className="flex w-full flex-col">
            <div className="ml-auto h-2/6 mr-4 mt-4">
              <TbReportMoney className="text-2xl h-12 w-12" />
            </div>
            <div className="h-1/6 ml-7 text-lg">Total revenue</div>
            <div className="h-2/6 ml-7 text-custom-for-revenue font-bold">
              {formatUSD(parseInt(randomNumbers.sixDigits))}
            </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: "#F4ECDD" }}
          className="flex w-1/4 rounded-xl-2  text-black mr-10"
        >
          <div className="flex w-full flex-col">
            <div className="ml-auto h-2/6 mr-4 mt-4">
              <GrTransaction className="text-2xl h-12 w-12" />
            </div>
            <div className="h-1/6 ml-7 text-lg">Total Transactions</div>
            <div className="h-2/6 ml-7 text-custom-for-revenue font-bold">
              {parseInt(formatNumber(randomNumbers.fiveDigits))}
            </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: "#EFDBDB" }}
          className="flex w-1/4 rounded-xl-2 text-black mr-10"
        >
          <div className="flex w-full flex-col">
            <div className="ml-auto h-2/6 mr-4 mt-4">
              <AiOutlineLike className="text-2xl h-12 w-12" />
            </div>
            <div className="h-1/6 ml-7 text-lg">Total likes</div>
            <div className="h-2/6 ml-7 text-custom-for-revenue font-bold">
            {parseInt(formatNumber(randomNumbers.fourDigits))}
            </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: "#DEE0EF" }}
          className="flex w-1/4 rounded-xl-2 text-black mr-10"
        >
          <div className="flex w-full flex-col">
            <div className="ml-auto h-2/6 mr-4 mt-4">
              <FiUsers className="text-2xl h-12 w-12" />
            </div>
            <div className="h-1/6 ml-7 text-lg">Total Users</div>
            <div className="h-2/6 ml-7 text-custom-for-revenue font-bold">
            {parseInt(formatNumber(randomNumbers.threeDigits))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
