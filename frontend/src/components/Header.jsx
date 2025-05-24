
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo_02.png';

// Sun Icon for Light Mode
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m.386-6.364l1.591 1.591" />
  </svg>
);

// Moon Icon for Dark Mode
const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
);

// Menu Icon (Hamburger)
const MenuIcon = () => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

// Close Icon (X)
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);


const Header = ({ theme, toggleTheme }) => { 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 ${
      isActive
        ? 'bg-amber-500 text-white shadow-md dark:bg-amber-600 dark:text-white' 
        : 'text-slate-600 hover:bg-amber-100 hover:text-amber-600 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-amber-400'
    }`;

  const mobileNavLinkClasses = ({ isActive }) =>
    `block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500 ${
      isActive
        ? 'bg-amber-500 text-white dark:bg-amber-600'
        : 'text-slate-600 hover:bg-amber-100 hover:text-amber-600 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-amber-400'
    }`;

  return (
    <header className="bg-white/90 dark:bg-neutral-800/90 backdrop-blur-lg shadow-sm sticky top-0 z-40">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        <Link to="/" aria-label="AD FILMS Home">
          <img src={logo} alt="AD FILMS Logo" className="h-50 w-30 object-contain" />
        </Link>
        <div className="flex items-center space-x-1 md:space-x-2">
          <div className="hidden sm:flex space-x-1 md:space-x-2">
            <NavLink to="/" className={navLinkClasses} end>Home</NavLink>
            <NavLink to="/portfolio" className={navLinkClasses}>Portfolio</NavLink>
            <NavLink to="/about" className={navLinkClasses}>About Us</NavLink>
            <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
          </div>
          
          <button
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
            className="p-2 rounded-full text-slate-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 transition-colors duration-200"
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>

          {/* Mobile menu button */}
          <div className="sm:hidden ml-2">
             <button 
                onClick={toggleMobileMenu} 
                className="text-slate-500 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-amber-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" 
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu-panel"
              >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu-panel"
        className={`
          sm:hidden bg-white dark:bg-neutral-800 shadow-xl absolute top-16 left-0 right-0 z-30 
          transition-all duration-300 ease-in-out transform origin-top
          ${isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-95 pointer-events-none'}
        `}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLink to="/" className={mobileNavLinkClasses} onClick={toggleMobileMenu} end>Home</NavLink>
          <NavLink to="/portfolio" className={mobileNavLinkClasses} onClick={toggleMobileMenu}>Portfolio</NavLink>
          <NavLink to="/about" className={mobileNavLinkClasses} onClick={toggleMobileMenu}>About Us</NavLink>
          <NavLink to="/contact" className={mobileNavLinkClasses} onClick={toggleMobileMenu}>Contact</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;