
import React from 'react';
import { Outlet } from 'react-router-dom';
import WeddingNavbar from './WeddingHeader.jsx';
import WeddingFooterComponent from './WeddingFooter.jsx';

const WeddingLayout = ({ theme, toggleTheme }) => {
  return (
    <div className="flex flex-col min-h-screen font-montserrat">
      <WeddingNavbar theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow">
        <Outlet /> {/* This is where the specific wedding page content will be rendered */}
      </main>
      <WeddingFooterComponent />
    </div>
  );
};

export default WeddingLayout;
