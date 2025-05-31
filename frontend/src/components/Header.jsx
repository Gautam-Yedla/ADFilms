
import React, { useState, useEffect, useRef } from 'react';
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

const ChevronDownIcon = ({ className = "w-4 h-4 ml-1" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

const ChevronRightIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);


const Header = ({ theme, toggleTheme }) => { 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPortfolioDropdownOpen, setIsPortfolioDropdownOpen] = useState(false);
  const [isMobilePortfolioOpen, setIsMobilePortfolioOpen] = useState(false);
  const portfolioDropdownRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMobilePortfolioOpen(false); // Close portfolio submenu when mobile menu is toggled
  };
  
  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsPortfolioDropdownOpen(false);
    setIsMobilePortfolioOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (portfolioDropdownRef.current && !portfolioDropdownRef.current.contains(event.target)) {
        setIsPortfolioDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 ${
      isActive
        ? 'bg-amber-500 text-white shadow-md dark:bg-amber-600 dark:text-white' 
        : 'text-slate-600 hover:bg-amber-100 hover:text-amber-600 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-amber-400'
    }`;
  
  const portfolioTriggerClasses = `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 flex items-center cursor-pointer
  ${'text-slate-600 hover:bg-amber-100 hover:text-amber-600 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-amber-400'}`;

  const mobileNavLinkClasses = ({ isActive }) =>
    `block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500 ${
      isActive
        ? 'bg-amber-500 text-white dark:bg-amber-600'
        : 'text-slate-600 hover:bg-amber-100 hover:text-amber-600 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-amber-400'
    }`;
  
  const mobilePortfolioTriggerClasses = `flex justify-between items-center w-full px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:bg-amber-100 hover:text-amber-600 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-amber-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500`;


  const portfolioItems = [
    { to: "/youtube", label: "YouTube Content" },
    { to: "/wedding", label: "Wedding Cinematography" },
    { to: "/commercials/work", label: "Commercial Productions" },
  ];

  return (
    <header className="bg-white/90 dark:bg-neutral-800/90 backdrop-blur-lg shadow-sm sticky top-0 z-40">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        <Link to="/" aria-label="AD FILMS Home" onClick={() => { setIsPortfolioDropdownOpen(false); setIsMobileMenuOpen(false);}}>
          <img src={logo} alt="AD FILMS Logo" className="h-30 w-30 object-contain" />
        </Link>
        <div className="flex items-center space-x-1 md:space-x-2">
          <div className="hidden sm:flex space-x-1 md:space-x-2 items-center">
            <NavLink to="/" className={navLinkClasses} end onClick={() => setIsPortfolioDropdownOpen(false)}>Home</NavLink>
            
            {/* Portfolio Dropdown Trigger - Desktop */}
            <div className="relative" ref={portfolioDropdownRef}>
              <button
                type="button"
                className={portfolioTriggerClasses}
                onClick={() => setIsPortfolioDropdownOpen(prev => !prev)}
                aria-haspopup="true"
                aria-expanded={isPortfolioDropdownOpen}
              >
                Portfolio <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform duration-200 ${isPortfolioDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isPortfolioDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-neutral-700 ring-1 ring-black ring-opacity-5 dark:ring-neutral-600 focus:outline-none py-1 z-50"
                  role="menu" 
                  aria-orientation="vertical" 
                  aria-labelledby="portfolio-menu-button"
                >
                  {portfolioItems.map(item => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({isActive}) => `block px-4 py-2 text-sm ${isActive ? 'bg-amber-100 text-amber-700 dark:bg-neutral-600 dark:text-amber-400' : 'text-slate-700 dark:text-neutral-200'} hover:bg-amber-50 dark:hover:bg-neutral-600 hover:text-amber-600 dark:hover:text-amber-300`}
                      role="menuitem"
                      onClick={() => setIsPortfolioDropdownOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/about" className={navLinkClasses} onClick={() => setIsPortfolioDropdownOpen(false)}>About Us</NavLink>
            <NavLink to="/contact" className={navLinkClasses} onClick={() => setIsPortfolioDropdownOpen(false)}>Contact</NavLink>
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
          <NavLink to="/" className={mobileNavLinkClasses} onClick={closeAllMenus} end>Home</NavLink>
          
          {/* Portfolio Expandable Section - Mobile */}
          <div>
            <button 
              type="button"
              className={mobilePortfolioTriggerClasses}
              onClick={() => setIsMobilePortfolioOpen(prev => !prev)}
              aria-expanded={isMobilePortfolioOpen}
            >
              <span>Portfolio</span>
              <ChevronRightIcon className={`w-5 h-5 transition-transform duration-200 ${isMobilePortfolioOpen ? 'rotate-90' : ''}`} />
            </button>
            {isMobilePortfolioOpen && (
              <div className="pl-4 mt-1 space-y-1">
                {portfolioItems.map(item => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={mobileNavLinkClasses}
                    onClick={closeAllMenus}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/about" className={mobileNavLinkClasses} onClick={closeAllMenus}>About Us</NavLink>
          <NavLink to="/contact" className={mobileNavLinkClasses} onClick={closeAllMenus}>Contact</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
