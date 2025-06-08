import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';

// ---------------- Import global styles ---------------
import './App.css'; 


// -------------- General Components ---------------

// import Chatbot from './components/Chatbot.jsx'; 
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { OpeningAnimation } from './components/OpeningAnimation004.jsx'; 
import HomePage from './pages/HomePage.jsx';
import YoutubePage from './pages/YoutubePage.jsx';
import WeddingPage from './pages/WeddingPage.jsx';
import AboutUs from './pages/AboutPage.jsx';
import ContactUs from './pages/ContactPage.jsx';



// -------------- Wedding Section Pages ----------------

import WeddingHeroSection from './pages/wedding/WeddingHeroSection.jsx';
import WeddingsPortfolioSection from './pages/wedding/WeddingsPortfolioSection.jsx';
import WeddingApproachSection from './pages/wedding/WeddingApproachSection.jsx';
import WeddingContactFormSection from './pages/wedding/WeddingContactFormSection.jsx';
import WeddingHeader from './pages/wedding/WeddingHeader.jsx';
import WeddingFooter from './pages/wedding/WeddingFooter.jsx';
import Weddingsection from './pages/wedding/weddingsection.jsx';
import Engagementsection from './pages/wedding/Engagementsection.jsx';
import Haldi from './pages/wedding/Haldi.jsx';
import Preweddingshoot from './pages/wedding/preweddingshoot.jsx';
import Sangeetsection from './pages/wedding/Sangeetsection.jsx';


// --------------- Commercials Section Components & Pages --------------

// import CommercialsFooter from '../src/pages/commercials/CommercialsFooter.jsx';
import CommercialsHeader from '../src/pages/commercials/CommercialsHeader.jsx';
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



  // Determine if the current route is part of the commercials or wedding section using useLocation

  const isCommercialsSection = location.pathname.startsWith('/commercials');
  const isWeddingSection = location.pathname.startsWith('/wedding');

  // Custom: List of route prefixes that should NOT have the app background

  const noAppBgRoutes = ['/wedding'];
  const shouldRemoveAppBg = noAppBgRoutes.some(prefix => location.pathname.startsWith(prefix));

  const appBgClass = shouldRemoveAppBg
    ? 'flex flex-col min-h-screen text-slate-700 dark:text-neutral-100 transition-opacity duration-1000 ease-in-out'
    : 'flex flex-col min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 text-slate-700 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 dark:text-neutral-100 transition-opacity duration-1000 ease-in-out';

  const fullScreenRoutes = ["/wedding", "/wedding/portfolio", "/wedding/approach"];

  return (
    <>
      {showOpening && <OpeningAnimation onAnimationComplete={handleAnimationComplete} />}
      
      <div 
        className={`${appBgClass} ${appVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Conditional Header */}
        {appVisible && (
          isCommercialsSection ? 
            <CommercialsHeader theme={theme} toggleTheme={toggleTheme} /> :
          isWeddingSection ?
            <WeddingHeader theme={theme} toggleTheme={toggleTheme} /> :
            <Header theme={theme} toggleTheme={toggleTheme} />
        )}

        {/* Universal Main Content Area Styling */}

        <main className={
          fullScreenRoutes.some(route => location.pathname.startsWith(route))
            ? "flex-grow"
            : "flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
        }>
          <Routes>
            {/* General Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/youtube" element={<YoutubePage />} />

            
            {/* Wedding Section Routes - no layout wrapper */}
            <Route path="/wedding" element={<WeddingHeroSection />} />
            <Route path="/wedding/portfolio" element={<WeddingsPortfolioSection />} />
            <Route path="/wedding/approach" element={<WeddingApproachSection />} />
            <Route path="/wedding/contact" element={<WeddingContactFormSection />} />
            <Route path="/wedding/wedding-section" element={<Weddingsection/>}/>
            <Route path="/wedding/engagement" element={<Engagementsection/>}/>
            <Route path="/wedding/haldi" element={<Haldi/>}/>
            <Route path="/wedding/prewedding" element={<Preweddingshoot/>}/>
            <Route path="/wedding/sangeet" element={<Sangeetsection/>}/>
            {/* Fallback for old /wedding route */}
            <Route path="/wedding-old" element={<WeddingPage />} />



            {/* Commercials Routes - Directly in App.jsx */}
            <Route path="/commercials" element={<CommercialsHomePage />} />
            <Route path="/commercials/work" element={<CommercialsPlaceholderWorkPage />} />
            <Route path="/commercials/services" element={<CommercialsServicesPage />} />
            <Route path="/commercials/contact" element={<CommercialsContactPage />} /> {/* Updated route */}
            {/* Catch-all for /commercials/any_other_path -> redirect to /commercials home */}
            <Route path="/commercials/*" element={<Navigate to="/commercials" replace />} />
            
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            {/* General Catch-all -> redirect to main home */}

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Conditional Footer */}
        {appVisible && (
          isCommercialsSection ? <Footer /> :
          isWeddingSection ? <WeddingFooter /> :
          <Footer />
        )}
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
