import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from './HomeComponents/HeroSection';
import InteractiveNavigationCards from './HomeComponents/InteractiveNavigationCards';
import WhyChooseUs from './HomeComponents/Brand';
import BrandsWeWorkedWith from './HomeComponents/BrandsWeWorkedWith';
import CallToAction from './HomeComponents/CallToAction';
import FeaturedAdOfTheMonth from './HomeComponents/FeaturedAdOfTheMonth';

const CommercialsHomePage = () => { 
  return (
    <div className="flex flex-col items-center justify-center py-8 sm:py-12 text-center">
      <HeroSection />
      <InteractiveNavigationCards />
      <FeaturedAdOfTheMonth />
      <BrandsWeWorkedWith/>
      <WhyChooseUs />
      <CallToAction />
    </div>
  );
};

export default CommercialsHomePage;
