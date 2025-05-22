
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { OpeningAnimation } from './components/OpeningAnimation.jsx'; 
import HomePage from './pages/HomePage.jsx';
import YoutubePage from './pages/YoutubePage.jsx';
import WeddingPage from './pages/WeddingPage.jsx';
import CommercialsPage from './pages/CommercialsPage.jsx';
import { PlaceholderPortfolioPage, PlaceholderAboutPage, PlaceholderContactPage } from '../src/pages/PlaceholderPage.jsx'; // Adjusted import


const App = () => {
  const [showOpening, setShowOpening] = useState(true);
  const [appVisible, setAppVisible] = useState(false);

  const handleAnimationComplete = () => {
    setShowOpening(false);
    // Delay to allow OpeningAnimation to unmount before App fades in
    setTimeout(() => {
      setAppVisible(true);
    }, 50); // A very short delay
  };

  // Preload images if any, or other assets
  useEffect(() => {
    // Example: new Image().src = '/path/to/image.jpg';
  }, []);

  return (
    <HashRouter>
      {showOpening && <OpeningAnimation onAnimationComplete={handleAnimationComplete} />}
      
      <div 
        className={`flex flex-col min-h-screen bg-gradient-to-br from-slate-100 via-neutral-50 to-stone-100 text-slate-800 transition-opacity duration-1000 ease-in-out ${
          appVisible ? 'opacity-100' : 'opacity-0 pointer-events-none' 
        }`}
      >
        {/* Render main content only when app is set to be visible to ensure smooth transition */}
        {appVisible && (
          <>
            <Header />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/youtube" element={<YoutubePage />} />
                <Route path="/wedding" element={<WeddingPage />} />
                <Route path="/commercials" element={<CommercialsPage />} />
                <Route path="/portfolio" element={<PlaceholderPortfolioPage />} />
                <Route path="/about" element={<PlaceholderAboutPage />} />
                <Route path="/contact" element={<PlaceholderContactPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
          </>
        )}
      </div>
    </HashRouter>
  );
};

export default App;