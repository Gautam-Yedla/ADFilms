import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo_02.png';

// Sun Icon for Light Mode
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m.386-6.364l1.591 1.591" />
  </svg>
);

// Moon Icon for Dark Mode
const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
);

// Menu Icon (Hamburger)
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

// Close Icon (X)
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ChevronDownIcon = ({ className = "chevron-icon" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

const ChevronRightIcon = ({ className = "chevron-right-icon" }) => (
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
    setIsMobilePortfolioOpen(false);
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

  const portfolioItems = [
    { to: "/youtube", label: "YouTube Content" },
    { to: "/wedding", label: "Wedding Cinematography" },
    { to: "/commercials/work", label: "Commercial Productions" },
  ];

  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" aria-label="AD FILMS Home" onClick={() => { setIsPortfolioDropdownOpen(false); setIsMobileMenuOpen(false);}}>
          <img src={logo} alt="AD FILMS Logo" className="logo" />
        </Link>
        <div className="nav-links-container">
          <div className="hidden sm:flex space-x-1 md:space-x-2 items-center">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end onClick={() => setIsPortfolioDropdownOpen(false)}>Home</NavLink>
            
            <div className="relative" ref={portfolioDropdownRef}>
              <button
                type="button"
                className="portfolio-trigger"
                onClick={() => setIsPortfolioDropdownOpen(prev => !prev)}
                aria-haspopup="true"
                aria-expanded={isPortfolioDropdownOpen}
              >
                Portfolio <ChevronDownIcon className={`chevron-icon ${isPortfolioDropdownOpen ? 'rotate' : ''}`} />
              </button>
              {isPortfolioDropdownOpen && (
                <div 
                  className="portfolio-dropdown"
                  role="menu" 
                  aria-orientation="vertical" 
                  aria-labelledby="portfolio-menu-button"
                >
                  {portfolioItems.map(item => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) => `portfolio-item ${isActive ? 'active' : ''}`}
                      role="menuitem"
                      onClick={() => setIsPortfolioDropdownOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsPortfolioDropdownOpen(false)}>About Us</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsPortfolioDropdownOpen(false)}>Contact</NavLink>
          </div>
          
          <button
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
            className="theme-toggle"
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>

          <div className="mobile-only ml-2">
            <button 
              onClick={toggleMobileMenu} 
              className="mobile-menu-button" 
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu-panel"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-menu-panel"
        className={`mobile-menu-panel ${isMobileMenuOpen ? 'open' : 'closed'}`}
      >
        <div className="mobile-menu-content">
          <NavLink to="/" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeAllMenus} end>Home</NavLink>
          
          <div>
            <button 
              type="button"
              className="mobile-portfolio-trigger"
              onClick={() => setIsMobilePortfolioOpen(prev => !prev)}
              aria-expanded={isMobilePortfolioOpen}
            >
              <span>Portfolio</span>
              <ChevronRightIcon className={`chevron-right-icon ${isMobilePortfolioOpen ? 'rotate' : ''}`} />
            </button>
            {isMobilePortfolioOpen && (
              <div className="mobile-portfolio-content">
                {portfolioItems.map(item => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={closeAllMenus}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/about" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeAllMenus}>About Us</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeAllMenus}>Contact</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;