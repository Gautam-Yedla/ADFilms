
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, Link as RouterLink } from 'react-router-dom'; // Import NavLink and Link

// Icons
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m.386-6.364l1.591 1.591" /></svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
);

import PropTypes from 'prop-types';

export default function WeddingNavbar({ theme, toggleTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/wedding' }, 
    { name: 'Portfolio', href: '/wedding/portfolio' },
    { name: 'Our Approach', href: '/wedding/approach' },
    { name: 'About Us', href: '/about' }, // Link to main about page
    { name: 'Contact', href: '/wedding/contact' },
  ];

  const navLinkBaseClasses = "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out";
  const navLinkActiveClass = "text-pink-600 dark:text-pink-400 border-b-2 border-pink-500 dark:border-pink-400";
  const navLinkInactiveClass = "text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-neutral-700";
  
  const mobileNavLinkBaseClasses = "block px-4 py-3 text-base font-medium transition-colors duration-200 ease-in-out";
  const mobileNavLinkActiveClass = "text-pink-600 dark:text-pink-400 bg-pink-100 dark:bg-neutral-700";
  const mobileNavLinkInactiveClass = "text-gray-700 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-neutral-700";
  
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.2 }}
      className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md shadow-sm font-montserrat"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <RouterLink to="/wedding" className="flex-shrink-0" onClick={closeMobileMenu}>
              <span className="font-playfair text-2xl font-bold text-gray-800 dark:text-white">AD FILMS</span>
            </RouterLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  end={item.href === '/wedding'} // Ensure "Home" is only active for exact /wedding path
                  className={({isActive}) => `${navLinkBaseClasses} ${isActive ? navLinkActiveClass : navLinkInactiveClass}`}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <button
                onClick={toggleTheme}
                aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
                className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 transition-colors duration-200 mr-2"
            >
                {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-100 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={closeMobileMenu}
                  end={item.href === '/wedding'}
                  className={({isActive}) => `${mobileNavLinkBaseClasses} ${isActive ? mobileNavLinkActiveClass : mobileNavLinkInactiveClass} rounded-md`}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

WeddingNavbar.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
