import React from 'react';
import { Link } from 'react-router-dom';
import VideoPortfolioGrid from "./OurWork/VideoPortfolioGrid";
import ProjectSpotlight from "./OurWork/ProjectHighlight";
import ClientTestimonials from "./OurWork/ClientTestimonials";
import FeaturedAdOfTheMonth from './HomeComponents/FeaturedAdOfTheMonth';
// import AwardsRecognitions from "./OurWork/AwardsRecognitions";
// import PerformanceMetrics from "./OurWork/Performance";

const PageLayout = ({ title, children }) => (
  <div className="py-8 sm:py-12 text-center pxx-0 w-full">
    <h1 className="text-3xl sm:text-4xl font-bold text-slate-700 dark:text-neutral-200 mb-6 ">
      {title}
    </h1>
    <div className="text-lg text-slate-600 dark:text-neutral-300 mb-8 max-w-xl mx-auto text-left space-y-4">
      {children}
    </div>
    <VideoPortfolioGrid />
    <FeaturedAdOfTheMonth />
    <ClientTestimonials />
    <ProjectSpotlight />
    {/* <AwardsRecognitions /> */}
    {/* <PerformanceMetrics /> */}
  </div>
);

export const CommercialsPlaceholderWorkPage = () => (
  <PageLayout title="Our Commercial Work" />
);

// CommercialsPlaceholderServicesPage removed

export const CommercialsPlaceholderContactPage = () => (
  <PageLayout title="Contact Us for Commercial Projects">
    <p>Ready to discuss your next commercial project? Find out how to get in touch with our dedicated commercials team. Contact details will be available shortly.</p>
  </PageLayout>
);

// Export PageLayout if it's intended to be used by other non-placeholder pages directly
export { PageLayout };
