
import React from 'react';
import { Link } from 'react-router-dom';

// Removed React.FC and type annotations for props
const PageLayout = ({ title, children }) => (
  <div className="py-8 sm:py-12 text-center">
    <h1 className="text-3xl sm:text-4xl font-bold text-slate-700 mb-6">{title}</h1>
    <div className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
      {children}
    </div>
    <Link 
      to="/"
      className="inline-block bg-sky-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-sky-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75"
    >
      Back to Home
    </Link>
  </div>
);

// Removed React.FC
export const PlaceholderPortfolioPage = () => (
  <PageLayout title="Our Portfolio">
    <p>Our diverse portfolio showcasing various projects will be available here soon. Stay tuned to see our best work!</p>
  </PageLayout>
);

// Removed React.FC
export const PlaceholderAboutPage = () => (
  <PageLayout title="About Us">
    <p>Learn more about AD FILMS, our mission, our team, and what drives our passion for visual storytelling. Full details coming soon!</p>
  </PageLayout>
);

// Removed React.FC
export const PlaceholderContactPage = () => (
  <PageLayout title="Contact Us">
    <p>We'd love to hear from you! Information on how to get in touch for collaborations, inquiries, or just to say hello will be here shortly.</p>
  </PageLayout>
);