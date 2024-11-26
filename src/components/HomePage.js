import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assests/images/hero-image.webp"; // Update the path to your actual image

function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Welcome to the <span className="text-yellow-300">Stock Prediction App</span>
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Our application leverages advanced machine learning algorithms to analyze stock market trends and predict future performance. Dive into insightful data visualizations and make informed decisions about your investments.
            </p>
            <Link
              to="/dashboard"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition"
            >
              Explore Dashboard
            </Link>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={heroImage}
              alt="Stock Analysis"
              className="rounded-lg shadow-md w-full object-cover max-h-96"
            />
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About the Project</h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
          The Stock Prediction App aims to simplify the complexities of stock market analysis by
          providing users with visualized data and predictive insights. Whether you're a seasoned
          investor or just starting, our tools are designed to guide your investment journey
          effectively.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Data Visualization</h3>
            <p className="text-gray-600">
              Access detailed graphs and charts that summarize stock performance over time.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Predictive Insights</h3>
            <p className="text-gray-600">
              Utilize AI-powered models to predict stock trends and make data-driven decisions.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">User-Friendly Dashboard</h3>
            <p className="text-gray-600">
              Navigate through an intuitive dashboard that simplifies stock market analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <footer className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-8">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Predict?</h3>
          <p className="text-lg mb-6">
            Explore the features of our app and gain actionable insights into stock market trends.
          </p>
          <Link
            to="/predict"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition"
          >
            Start Predicting
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
