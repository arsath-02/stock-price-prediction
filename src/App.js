import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Import your images
import img1 from './assests/images/img1.png';
import img2 from './assests/images/img2.png';
import img3 from './assests/images/img3.png';
import img4 from './assests/images/img4.png';
import img5 from './assests/images/img5.png';
import img6 from './assests/images/img6.png';
import img7 from './assests/images/img7.png';
import img8 from './assests/images/img8.png';

function App() {
  const [prices, setPrices] = useState(new Array(5).fill(''));  
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (index, event) => {
    const newPrices = [...prices];
    newPrices[index] = event.target.value;
    setPrices(newPrices);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://apparent-wolf-obviously.ngrok-free.app/predict', {
        input: prices.map(price => parseFloat(price))
      });

      const receivedPrediction = response.data.prediction;
      if (Array.isArray(receivedPrediction) && receivedPrediction.length > 0 && Array.isArray(receivedPrediction[0])) {
        setPrediction(receivedPrediction[0][0]); 
        setError(null); 
      } else {
        setError('Unexpected prediction format.');
      }
    } catch (err) {
      console.error('Error in fetching prediction:', err);
      setError('Error in fetching prediction. Please try again.');
    }
  };

  useEffect(() => {
    console.log("Prediction State After Update:", prediction);
  }, [prediction]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Amazon Stock Price Prediction</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-5 gap-2 mb-4">
            {prices.map((price, index) => (
              <input
                key={index}
                type="number"
                value={price}
                onChange={(e) => handleChange(index, e)}
                className="border rounded p-1 text-center"
                placeholder={`Day ${index + 1}`}
                required
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Predict
          </button>
        </form>

        {prediction !== null && (
          <div className="mt-4 text-center">
            <h3 className="text-xl font-bold">Predicted Price:</h3>
            <p className="text-green-500 text-2xl">${prediction.toFixed(2)}</p> 
          </div>
        )}

        {error && (
          <div className="mt-4 text-center text-red-500">
            <p>{error}</p>
          </div>
        )}
        
        {/* Displaying the 8 images */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <img src={img5} alt="img1" className="w-full h-auto" />
          <img src={img6} alt="img2" className="w-full h-auto" />
          <img src={img7} alt="img3" className="w-full h-auto" />
          <img src={img8} alt="img4" className="w-full h-auto" />
          <img src={img5} alt="img5" className="w-full h-auto" />
          <img src={img6} alt="img6" className="w-full h-auto" />
          <img src={img7} alt="img7" className="w-full h-auto" />
          <img src={img8} alt="img8" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default App;
