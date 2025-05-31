
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CommercialsHeader from '../commercials/CommercialsHeader.jsx';
import CommercialsFooter from '../../components/Footer.jsx';
import CommercialsHomePage from '../commercials/CommercialsHomePage.jsx';
// Updated import: Removed CommercialsPlaceholderServicesPage
import { CommercialsPlaceholderWorkPage, CommercialsPlaceholderContactPage } from '../commercials/CommercialsPlaceholderPages.jsx';
import CommercialsServicesPage from '../commercials/CommercialsServicesPage.jsx'; // Added new import

const CommercialsLayout = ({ theme, toggleTheme }) => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Full screen height for layout */}
      <CommercialsHeader theme={theme} toggleTheme={toggleTheme} />
      <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Routes>
          <Route path="/" element={<CommercialsHomePage />} />
          <Route path="/work" element={<CommercialsPlaceholderWorkPage />} />
          {/* Updated route to use the new CommercialsServicesPage */}
          <Route path="/services" element={<CommercialsServicesPage />} />
          <Route path="/contact" element={<CommercialsPlaceholderContactPage />} />
          <Route path="*" element={<Navigate to="" replace />} /> {/* Default to commercials home */}
        </Routes>
      </div>
      <CommercialsFooter />
    </div>
  );
};

export default CommercialsLayout;