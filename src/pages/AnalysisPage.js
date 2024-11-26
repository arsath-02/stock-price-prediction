import React from "react";
import img1 from "../assests/images/img1.png";
import img2 from "../assests/images/img2.png";
import img3 from "../assests/images/img3.png";
import img4 from "../assests/images/img4.png";
import img5 from "../assests/images/img5.png";
import img6 from "../assests/images/img6.png";
import img7 from "../assests/images/img7.png";
import img8 from "../assests/images/img8.png";

// Image data with descriptions and inferences
const imageData = [
  {
    src: img1,
    title: "Annual Sum of Prices",
    description: "Annual sum of opening and closing prices with growth over years.",
    inference: "Consistent growth reflects increased market confidence and company performance.",
  },
  {
    src: img2,
    title: "Market Volatility",
    description: "Comparison of low and high prices by year.",
    inference: "Widening gaps indicate increased market volatility as the stock gains value.",
  },
  {
    src: img3,
    title: "Price and Month Analysis",
    description: "Sum of prices across months showing trends.",
    inference: "Sharp growth post-2010 indicates substantial stock value increase.",
  },
  {
    src: img4,
    title: "Percentage Change Analysis",
    description: "Percentage change trends over time.",
    inference: "Stability in recent years reflects market maturity.",
  },
  {
    src: img5,
    title: "Change % and Price Trends",
    description: "Line chart highlighting major fluctuations.",
    inference: "Spikes in early years highlight significant volatility.",
  },
  {
    src: img6,
    title: "Trading Volume vs Change %",
    description: "Relationship between trading volume and price changes.",
    inference: "High trading volume aligns with significant changes during volatile periods.",
  },
  {
    src: img7,
    title: "Low and High Prices by Month",
    description: "Grouped data showing steady growth.",
    inference: "Steady upward trends reflect consistent market growth over time.",
  },
  {
    src: img8,
    title: "Seasonal Analysis",
    description: "Seasonal stock performance across months.",
    inference: "Insights into seasonal variations and performance trends.",
  },
];

function AnalysisPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 p-8 flex items-center justify-center">
      <div className="w-full max-w-7xl bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 text-yellow-300">
          Analysis and Insights
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Explore detailed analysis and key insights derived from the stock data.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {imageData.map((data, index) => (
            <div
              key={index}
              className="w-full max-w-sm mx-auto border rounded-lg overflow-hidden shadow-md bg-white transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={data.src}
                alt={data.title}
                className="w-full h-64 object-contain bg-gray-100"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                  {data.title}
                </h3>
                <p className="text-yellow-400">
                  <strong>Description:</strong> {data.description}
                </p>
                <p className="text-gray-500 italic mt-2">
                  <strong>Inference:</strong> {data.inference}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AnalysisPage;
