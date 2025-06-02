
import React from 'react';
import { Link } from 'react-router-dom';

const YoutubePage = () => { 
  return (
    <div className="py-8 sm:py-12 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-amber-500 dark:text-amber-400 mb-6">Our YouTube Creations</h1>
      <p className="text-lg text-slate-600 dark:text-neutral-200 mb-4 max-w-xl mx-auto">
        Dive into our world of captivating YouTube content. We produce a variety of videos designed to engage, entertain, and inform.
      </p>
      <p className="text-md text-slate-600 dark:text-neutral-300 mb-8 max-w-xl mx-auto">
        (Content for YouTube projects will be showcased here soon!)
      </p>
      <Link 
        to="/" 
        className="inline-block bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-amber-600 dark:hover:bg-amber-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 dark:focus:ring-amber-500 focus:ring-opacity-75"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default YoutubePage;