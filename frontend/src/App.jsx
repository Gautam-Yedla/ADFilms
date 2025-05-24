
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { OpeningAnimation } from './components/OpeningAnimation.jsx'; 
import HomePage from './pages/HomePage.jsx';
import YoutubePage from './pages/YoutubePage.jsx';
import WeddingPage from './pages/WeddingPage.jsx';
import CommercialsPage from './pages/CommercialsPage.jsx';
import { PlaceholderPortfolioPage, PlaceholderAboutPage, PlaceholderContactPage } from '../src/pages/PlaceholderPage.jsx';


const App = () => {
  const [showOpening, setShowOpening] = useState(true);
  const [appVisible, setAppVisible] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    // Default to system preference if available, otherwise light
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
    logoImage.src = '../src/assets/logo.png'; 
  }, []);

  return (
    <HashRouter>
      {showOpening && <OpeningAnimation onAnimationComplete={handleAnimationComplete} />}
      
      <div 
        className={`flex flex-col min-h-screen 
          bg-gradient-to-br from-white via-slate-50 to-slate-100 text-slate-700 
          dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 dark:text-neutral-100 
          transition-opacity duration-1000 ease-in-out ${
          appVisible ? 'opacity-100' : 'opacity-0 pointer-events-none' 
        }`}
      >
        {appVisible && (
          <>
            <Header theme={theme} toggleTheme={toggleTheme} />
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