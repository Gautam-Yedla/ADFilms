
import React from 'react';
import { Link } from 'react-router-dom';

const CommercialsHomePage = () => { 
  return (
    <div className="flex flex-col items-center justify-center py-8 sm:py-12 text-center">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-700 dark:text-neutral-200 mb-4">
        AD FILMS <span className="text-amber-500 dark:text-amber-400">Commercials</span>
      </h1>
      <p className="text-lg text-slate-600 dark:text-neutral-300 mb-10 sm:mb-12 lg:mb-16 max-w-2xl">
        Crafting impactful and visually stunning ad commercials that tell your brand's story and captivate your audience.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 w-full max-w-4xl mb-12">
        <div className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-amber-500 dark:text-amber-400 mb-3">Our Vision</h2>
          <p className="text-slate-600 dark:text-neutral-300">
            We believe in the power of storytelling to build brands. Our commercials are designed not just to sell, but to connect, inspire, and leave a lasting impression.
          </p>
        </div>
        <div className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-amber-500 dark:text-amber-400 mb-3">What We Do</h2>
          <p className="text-slate-600 dark:text-neutral-300">
            From concept development and scriptwriting to production and post-production, we offer end-to-end solutions for high-quality commercial filmmaking.
          </p>
        </div>
      </div>

      <p className="text-md text-slate-500 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
        (Examples of our dynamic commercial work will be showcased in the "Our Work" section soon!)
      </p>
      
      <Link 
        to="/commercials/work" 
        className="inline-block bg-amber-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-amber-600 dark:hover:bg-amber-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 dark:focus:ring-amber-500 focus:ring-opacity-75"
      >
        Explore Our Work
      </Link>
    </div>
  );
};

export default CommercialsHomePage;
