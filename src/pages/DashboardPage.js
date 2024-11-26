import React from "react";
import { useNavigate } from "react-router-dom";
import chart from "../assests/images/dashboard.png";

function StockDashboard() {
  const navigate = useNavigate();

  const handlePredictNavigation = () => {
    navigate("/predict");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-yellow-300 mb-6">
          Amazon Stock Dashboard
        </h1>
        <p className="text-center text-gray-600 mb-8">
          This dashboard provides a comprehensive analysis of Amazon's stock market trends and performance 
          between 1997 and 2002.
        </p>
        
        {/* Chart Section */}
        <div className="flex justify-center mb-10">
          <img
            src={chart}
            alt="Stock Dashboard Chart"
            className="rounded-lg shadow-md w-full object-contain max-h-[500px]"
          />
        </div>

        {/* Analysis Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Analysis</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-4">
            <li>
              <strong>Annual Price Growth:</strong> The chart on the top left shows a consistent 
              increase in the annual sum of opening and closing prices, indicating Amazon's growing 
              market confidence and performance during this period.
            </li>
            <li>
              <strong>Market Volatility:</strong> The difference between low and high prices 
              (bottom left) widens over time, reflecting increased market activity and investor interest.
            </li>
            <li>
              <strong>Trading Volume Trends:</strong> High trading volumes align with significant 
              stock price changes, as seen in the top right chart. This highlights market reactions to major events.
            </li>
            <li>
              <strong>Seasonality:</strong> The chart on the bottom right suggests consistent 
              monthly performance, with occasional peaks indicating seasonal trends.
            </li>
            <li>
              <strong>Percentage Change:</strong> Fluctuations in the percentage change 
              (middle charts) are prominent in the early years but stabilize as the company matures.
            </li>
          </ul>
        </div>

        {/* Navigation Button */}
        <div className="flex justify-center">
          <button
            onClick={handlePredictNavigation}
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition"
          >
            Predict Stock
          </button>
        </div>
      </div>
    </div>
  );
}

export default StockDashboard;
