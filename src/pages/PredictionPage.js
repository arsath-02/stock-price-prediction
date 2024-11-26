import React, { useState } from "react";
import axios from "axios";
import InputField from "../components/InputField";
import backgroundImage from "../assests/images/hero-predict.jpeg"; // Corrected the path

function PredictionPage() {
  const [prices, setPrices] = useState(new Array(5).fill(""));
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (index, event) => {
    const newPrices = [...prices];
    newPrices[index] = event.target.value;
    setPrices(newPrices);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setPrediction(null);
    setError(null);

    try {
      const response = await axios.post("https://stock-price-prediction-nr78.onrender.com/predict", {
        input: prices.map((price) => parseFloat(price)),
      });
      setPrediction(response.data.prediction[0][0]);
    } catch (err) {
      setError("Error fetching prediction. Please check the input values or try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "blur(8px)",
          zIndex: -1,
        }}
      ></div>

      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Prediction Box */}
      <div className="relative w-full max-w-3xl bg-white rounded-lg shadow-lg p-8 z-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Amazon Stock Price Prediction
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Enter the last 5 days' stock prices to predict the next day's price.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-6">
            {prices.map((price, index) => (
              <InputField
                key={index}
                value={price}
                index={index}
                onChange={handleChange}
                placeholder={`Day ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="loader mr-2"></div> Predicting...
                </div>
              ) : (
                "Predict"
              )}
            </button>
          </div>
        </form>

        {/* Loading Indicator */}
        {loading && (
          <div className="mt-6 flex justify-center">
            <div className="loader"></div>
          </div>
        )}

        {/* Prediction Result */}
        {prediction !== null && (
          <div className="mt-6 bg-green-100 border border-green-400 text-green-700 rounded-lg p-4 text-center">
            <h3 className="text-lg font-bold">Predicted Price:</h3>
            <p className="text-2xl font-extrabold">${prediction.toFixed(2)}</p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mt-6 bg-red-100 border border-red-400 text-red-700 rounded-lg p-4 text-center">
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PredictionPage;