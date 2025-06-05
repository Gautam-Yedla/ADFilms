import React from 'react';
import { Link } from 'react-router-dom';

const PageLayout = ({ title, children }) => (
  <div className="py-8 sm:py-12 text-center">
    <h1 className="text-3xl sm:text-4xl font-bold text-slate-700 dark:text-neutral-200 mb-6">{title}</h1>
    <div className="text-lg text-slate-600 dark:text-neutral-300 mb-8 max-w-xl mx-auto text-left space-y-4">
      {children}
    </div>
    <Link 
      to="/commercials"
      className="inline-block bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-amber-600 dark:hover:bg-amber-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 dark:focus:ring-amber-500 focus:ring-opacity-75 mt-8"
    >
      Back to Commercials Home
    </Link>
  </div>
);

export const CommercialsPlaceholderWorkPage = () => (
  <PageLayout title="Our Commercial Work">
    <p>Our portfolio of impactful ad commercials will be showcased here soon. Get ready to see creativity in motion!</p>
  </PageLayout>
);

// CommercialsPlaceholderServicesPage removed

export const CommercialsPlaceholderContactPage = () => (
  <PageLayout title="Contact Us for Commercial Projects">
    <p>Ready to discuss your next commercial project? Find out how to get in touch with our dedicated commercials team. Contact details will be available shortly.</p>
  </PageLayout>
);

// Export PageLayout if it's intended to be used by other non-placeholder pages directly
export { PageLayout };
