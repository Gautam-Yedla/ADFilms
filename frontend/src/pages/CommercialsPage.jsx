
import React from 'react';
import { Link } from 'react-router-dom';

const CommercialsPage = () => { // Removed React.FC
  return (
    <div className="py-8 sm:py-12 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-amber-600 mb-6">Innovative Ad Commercials</h1>
      <p className="text-lg text-slate-700 mb-4 max-w-xl mx-auto">
        From concept to final cut, we produce creative and impactful ad commercials that elevate your brand and connect with your audience.
      </p>
      <p className="text-md text-slate-600 mb-8 max-w-xl mx-auto">
        (Examples of our dynamic commercial work will be showcased here soon!)
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

export default CommercialsPage;