
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import './App.css'; // Import global styles

// General Components
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { OpeningAnimation } from './components/OpeningAnimation004.jsx'; 
// import Chatbot from './components/Chatbot.jsx'; 

// General Pages
import HomePage from './pages/HomePage.jsx';
import YoutubePage from './pages/YoutubePage.jsx';
import WeddingPage from './pages/WeddingPage.jsx';






import AboutPage from './pages/AboutPage.jsx'; // New About Page
import { PlaceholderContactPage } from './pages/PlaceholderPage.jsx';

import CommercialsHeader from '../src/pages/commercials/CommercialsHeader.jsx';
// import CommercialsFooter from '../src/pages/commercials/CommercialsFooter.jsx';
import CommercialsHomePage from '../src/pages/commercials/CommercialsHomePage.jsx';
import { CommercialsPlaceholderWorkPage } from '../src/pages/commercials/CommercialsPlaceholderPages.jsx';
import CommercialsServicesPage from '../src/pages/commercials/CommercialsServicesPage.jsx';
import CommercialsContactPage from '../src/pages/commercials/CommercialsContactPage.jsx';

// Define the Theme type using JSDoc for better editor support
/**
 * @typedef {'light' | 'dark'} Theme
 */

// Inner component to use useLocation hook as App itself is defining HashRouter
const AppContent = () => {
  const location = useLocation();
  const [showOpening, setShowOpening] = useState(true);
  const [appVisible, setAppVisible] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') { // Validate savedTheme
      return savedTheme;
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleAnimationComplete = () => {
    setShowOpening(false);
    setTimeout(() => {
      setAppVisible(true);
    }, 50); 
  };

  useEffect(() => {
    const logoImage = new Image();
    logoImage.src = '/logo.png'; 
  }, []);

  // Determine if the current route is part of the commercials section using useLocation
  const isCommercialsSection = location.pathname.startsWith('/commercials');

  return (
    <>
      {showOpening && <OpeningAnimation onAnimationComplete={handleAnimationComplete} />}
      
      <div 
        className={`flex flex-col min-h-screen 
          bg-gradient-to-br from-white via-slate-50 to-slate-100 text-slate-700 
          dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 dark:text-neutral-100 
          transition-opacity duration-1000 ease-in-out ${
          appVisible ? 'opacity-100' : 'opacity-0 pointer-events-none' 
        }`}
      >
        {/* Conditional Header */}
        {appVisible && (
          isCommercialsSection ? 
          <CommercialsHeader theme={theme} toggleTheme={toggleTheme} /> :
          <Header theme={theme} toggleTheme={toggleTheme} />
        )}

        {/* Universal Main Content Area Styling */}
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Routes>
            {/* General Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/youtube" element={<YoutubePage />} />
            <Route path="/wedding" element={<WeddingPage />} />
            
            {/* Commercials Routes - Directly in App.jsx */}
            <Route path="/commercials" element={<CommercialsHomePage />} />
            <Route path="/commercials/work" element={<CommercialsPlaceholderWorkPage />} />
            <Route path="/commercials/services" element={<CommercialsServicesPage />} />
            <Route path="/commercials/contact" element={<CommercialsContactPage />} /> {/* Updated route */}
            {/* Catch-all for /commercials/any_other_path -> redirect to /commercials home */}
            <Route path="/commercials/*" element={<Navigate to="/commercials" replace />} />




            {/* New About Page */}
            <Route path="/about" element={<AboutPage />} />




            <Route path="/contact" element={<PlaceholderContactPage />} />

            {/* General Catch-all -> redirect to main home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Conditional Footer */}
        {/* {appVisible && (
          isCommercialsSection ?
          <CommercialsFooter /> :
          <Footer />
        )} */}
        {appVisible && <Footer />}
      </div>
      {/* {appVisible && <Chatbot theme={theme} />} */}
    </>
  );
};

const App = () => {
  return React.createElement(HashRouter, null, 
    React.createElement(AppContent)
  );
};

export default App;
