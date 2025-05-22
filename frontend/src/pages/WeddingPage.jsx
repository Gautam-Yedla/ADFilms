
import React from 'react';
import { Link } from 'react-router-dom';

const WeddingPage = () => { // Removed React.FC
  return (
    <div className="py-8 sm:py-12 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-6">Capturing Your Special Day</h1>
      <p className="text-lg text-slate-700 mb-4 max-w-xl mx-auto">
        We believe every love story is unique. Our wedding films are crafted with passion to preserve the beautiful moments and emotions of your wedding day.
      </p>
      <p className="text-md text-slate-600 mb-8 max-w-xl mx-auto">
        (Our portfolio of beautiful wedding films will be showcased here soon!)
      </p>
      <Link 
        to="/"
        className="inline-block bg-rose-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-rose-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-opacity-75"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default WeddingPage;