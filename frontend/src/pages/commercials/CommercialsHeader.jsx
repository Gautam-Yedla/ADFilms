import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo_02.png';
import '../../styling/commercials.css';

// Icons (re-defined or imported if made global)
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="commercials-theme-icon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m.386-6.364l1.591 1.591" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="commercials-theme-icon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
);

const MenuIcon = () => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="commercials-mobile-menu-icon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="commercials-mobile-menu-icon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="commercials-main-site-icon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

const CommercialsHeader = ({ theme, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinkClasses = ({ isActive }) =>
    `commercials-nav-link ${isActive ? 'commercials-nav-link-active' : 'commercials-nav-link-inactive'}`;
  
  const mobileNavLinkClasses = ({ isActive }) =>
    `commercials-mobile-nav-link ${isActive ? 'commercials-mobile-nav-link-active' : 'commercials-mobile-nav-link-inactive'}`;

  return (
    <header className="commercials-header">
      <nav className="commercials-nav-container">
        <div className="commercials-logo-container">
          <Link
            to="/commercials"
            className="flex items-center"
            aria-label="AD FILMS Commercials Home"
          >
            <img src={logo} alt="AD FILMS Logo" className="commercials-logo" />
            <span className="commercials-logo-text">
              | <span className="commercials-logo-highlight">Commercials</span>
            </span>
          </Link>
        </div>

        <div className="flex items-center space-x-1 md:space-x-2">
          {/* Desktop navigation: Hidden below 'lg' breakpoint */}
          <div className="hidden lg:flex items-center commercials-nav-links">
            {/* <NavLink to="/commercials" className={navLinkClasses} end>Home</NavLink> */}
            {/* <NavLink to="/commercials/work" className={navLinkClasses}>Our Work</NavLink> */}
            {/* <NavLink to="/commercials/services" className={navLinkClasses}>Services</NavLink> */}
            <Link
              to="/"
              className="commercials-main-site-link"
              aria-label="Back to main AD FILMS website"
            >
              {/* <ArrowLeftIcon />  */}
              Home
            </Link>
            <NavLink to="/commercials/contact" className={navLinkClasses}>
              Contact
            </NavLink>
          </div>

          <button
            onClick={toggleTheme}
            aria-label={
              theme === "light"
                ? "Switch to dark theme"
                : "Switch to light theme"
            }
            className="commercials-theme-toggle"
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>

          {/* Mobile menu button: Hidden at 'lg' breakpoint and above */}
          <div className="lg:hidden ml-2">
            <button
              onClick={toggleMobileMenu}
              className="commercials-mobile-menu-button"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="commercials-mobile-menu-panel"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel: Hidden at 'lg' breakpoint and above */}
      <div
        id="commercials-mobile-menu-panel"
        className={`commercials-mobile-menu-panel ${
          isMobileMenuOpen
            ? "commercials-mobile-menu-open"
            : "commercials-mobile-menu-closed"
        }`}
      >
        <div className="commercials-mobile-menu-content">
          <NavLink
            to="/commercials"
            className={mobileNavLinkClasses}
            onClick={toggleMobileMenu}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/commercials/work"
            className={mobileNavLinkClasses}
            onClick={toggleMobileMenu}
          >
            Our Work
          </NavLink>
          <NavLink
            to="/commercials/services"
            className={mobileNavLinkClasses}
            onClick={toggleMobileMenu}
          >
            Services
          </NavLink>
          <NavLink
            to="/commercials/contact"
            className={mobileNavLinkClasses}
            onClick={toggleMobileMenu}
          >
            Contact
          </NavLink>
          <Link
            to="/"
            className="commercials-mobile-main-site-link"
            onClick={toggleMobileMenu}
            aria-label="Back to main AD FILMS website"
          >
            <ArrowLeftIcon /> Main Site
          </Link>
        </div>
      </div>
    </header>
  );
};

export default CommercialsHeader;