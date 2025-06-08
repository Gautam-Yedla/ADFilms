// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { NavLink, Link as RouterLink } from 'react-router-dom';
// import logo from '../../assets/logo_02.png';
// import '../../styling/wedding.css';

// // Icons
// const MenuIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="wedding-navbar-icon">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//   </svg>
// );
// const CloseIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="wedding-navbar-icon">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//   </svg>
// );
// const SunIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="wedding-navbar-theme-icon">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m.386-6.364l1.591 1.591" />
//   </svg>
// );
// const MoonIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="wedding-navbar-theme-icon">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
//   </svg>
// );
// const ArrowLeftIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="wedding-navbar-arrow-icon">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
//   </svg>
// );

// export default function WeddingNavbar({ theme, toggleTheme, className = '' }) {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const navItems = [
//     { name: 'Home', href: '/wedding' },
//     { name: 'Portfolio', href: '/wedding/portfolio' },
//     { name: 'Our Approach', href: '/wedding/approach' },
//     { name: 'Contact', href: '/wedding/contact' },
//   ];

//   const closeMobileMenu = () => setIsMobileMenuOpen(false);
//   const navThemeClass = theme === 'dark' ? 'dark' : '';

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.2 }}
//       className={`wedding-navbar ${navThemeClass} ${className}`.trim()}
//       role="navigation"
//       aria-label="Wedding site navigation"
//     >
//       <div className="wedding-navbar-container">
//         <div className="wedding-navbar-flex">
//           <div className="wedding-navbar-logo">
//             <RouterLink to="/wedding" className="wedding-navbar-logo-link" onClick={closeMobileMenu} aria-label="AD FILMS Weddings Home">
//               <img src={logo} alt="AD FILMS Logo" className="wedding-navbar-logo-img" />
//               <span className="wedding-navbar-logo-text">
//                 | <span className="wedding-navbar-logo-highlight">Weddings</span>
//               </span>
//             </RouterLink>
//           </div>

//           <div className="wedding-navbar-desktop-mobile">
//             <nav className="wedding-navbar-desktop" aria-label="Main wedding navigation">
//               {navItems.map((item) => (
//                 <NavLink
//                   key={item.name}
//                   to={item.href}
//                   end={item.href === '/wedding'}
//                   className={({ isActive }) => `wedding-navbar-link ${isActive ? 'wedding-navbar-link-active' : 'wedding-navbar-link-inactive'}`}
//                 >
//                   {item.name}
//                 </NavLink>
//               ))}
//               <RouterLink to="/" className="wedding-navbar-link wedding-navbar-link-inactive wedding-navbar-main-site">
//                 <ArrowLeftIcon /> Main Site
//               </RouterLink>
//             </nav>

//             <div className="wedding-navbar-theme-mobile">
//               <button
//                 onClick={toggleTheme}
//                 aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
//                 className="wedding-navbar-theme-btn"
//               >
//                 {theme === 'light' ? <MoonIcon /> : <SunIcon />}
//               </button>
//               <button
//                 onClick={() => setIsMobileMenuOpen((open) => !open)}
//                 className="wedding-navbar-mobile-menu-btn"
//                 aria-controls="mobile-menu"
//                 aria-expanded={isMobileMenuOpen}
//                 aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
//               >
//                 {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             id="mobile-menu"
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="wedding-navbar-mobile-panel"
//             role="menu"
//           >
//             <div className="wedding-navbar-mobile-panel-links">
//               {navItems.map((item) => (
//                 <NavLink
//                   key={item.name}
//                   to={item.href}
//                   onClick={closeMobileMenu}
//                   end={item.href === '/wedding'}
//                   className={({ isActive }) => `wedding-navbar-mobile-link ${isActive ? 'wedding-navbar-mobile-link-active' : 'wedding-navbar-mobile-link-inactive'}`}
//                   role="menuitem"
//                 >
//                   {item.name}
//                 </NavLink>
//               ))}
//               <RouterLink
//                 to="/"
//                 className="wedding-navbar-mobile-link wedding-navbar-mobile-link-inactive wedding-navbar-main-site"
//                 onClick={closeMobileMenu}
//                 role="menuitem"
//               >
//                 <ArrowLeftIcon /> Main Site
//               </RouterLink>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }



import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link as RouterLink } from 'react-router-dom';
import logo from '../../assets/logo_02.png';
import '../../styling/wedding.css';

// Icons
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="wedding-mobile-menu-icon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="wedding-mobile-menu-icon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="wedding-theme-icon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m.386-6.364l1.591 1.591" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="wedding-theme-icon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="wedding-main-site-icon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

/**
 * WeddingNavbar - Professional wedding section navigation bar
 * @param {Object} props
 * @param {'light'|'dark'} props.theme - Current theme
 * @param {Function} props.toggleTheme - Theme toggle handler
 * @param {string} [props.className] - Additional class names
 */
const WeddingNavbar = ({ theme, toggleTheme, className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPortfolioDropdownOpen, setIsPortfolioDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const togglePortfolioDropdown = () => {
    setIsPortfolioDropdownOpen(prev => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsPortfolioDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinkClasses = ({ isActive }) =>
    `wedding-nav-link ${isActive ? 'wedding-nav-link-active' : 'wedding-nav-link-inactive'}`;

  const mobileNavLinkClasses = ({ isActive }) =>
    `wedding-mobile-nav-link ${isActive ? 'wedding-mobile-nav-link-active' : 'wedding-mobile-nav-link-inactive'}`;

  return (
    <header className={`wedding-header ${theme === 'dark' ? 'dark' : ''} ${className}`.trim()}>
      <nav className="wedding-nav-container">
        <div className="wedding-nav-container-flex">
          <div className="wedding-logo-container">
            <RouterLink to="/wedding" className="flex items-center" aria-label="AD FILMS Weddings Home">
              <img src={logo} alt="AD FILMS Logo" className="wedding-logo" />
              <span className="wedding-logo-text">
                | <span className="wedding-logo-highlight">Weddings</span>
              </span>
            </RouterLink>
          </div>

          <div className="flex items-center space-x-1 md:space-x-2">
            {/* Desktop navigation: Hidden below 'lg' breakpoint */}
            <div className="hidden lg:flex items-center wedding-nav-links">
              <NavLink to="/wedding" className={navLinkClasses} end>Home</NavLink>
              <div className="wedding-portfolio-dropdown-group" ref={dropdownRef}>
                <div className="wedding-portfolio-dropdown">
                  <button
                    onClick={togglePortfolioDropdown}
                    className={navLinkClasses({ isActive: false })}
                    tabIndex={0}
                    aria-haspopup="true"
                    aria-expanded={isPortfolioDropdownOpen}
                  >
                    Portfolio <span className="wedding-portfolio-dropdown-arrow">▼</span>
                  </button>
                  <div
                    className="wedding-portfolio-dropdown-menu"
                    style={{ display: isPortfolioDropdownOpen ? 'block' : 'none' }}
                  >
                    <NavLink
                      to="/wedding/wedding-section"
                      className={navLinkClasses}
                      onClick={() => setIsPortfolioDropdownOpen(false)}
                    >
                      Wedding
                    </NavLink>
                    <NavLink
                      to="/wedding/engagement"
                      className={navLinkClasses}
                      onClick={() => setIsPortfolioDropdownOpen(false)}
                    >
                      Engagement
                    </NavLink>
                    <NavLink
                      to="/wedding/haldi"
                      className={navLinkClasses}
                      onClick={() => setIsPortfolioDropdownOpen(false)}
                    >
                      Haldi
                    </NavLink>
                    <NavLink
                      to="/wedding/prewedding"
                      className={navLinkClasses}
                      onClick={() => setIsPortfolioDropdownOpen(false)}
                    >
                      Pre Wedding
                    </NavLink>
                    <NavLink
                      to="/wedding/sangeet"
                      className={navLinkClasses}
                      onClick={() => setIsPortfolioDropdownOpen(false)}
                    >
                      Sangeet
                    </NavLink>
                  </div>
                </div>
              </div>
              <NavLink to="/wedding/approach" className={navLinkClasses}>Our Approach</NavLink>
              <NavLink to="/wedding/contact" className={navLinkClasses}>Contact</NavLink>
              <RouterLink
                to="/"
                className={`wedding-mobile-main-site-link ${theme === 'dark' ? 'dark' : ''}`}
                aria-label="Back to main AD FILMS website"
              >
                <ArrowLeftIcon /> Main Site
              </RouterLink>
            </div>

            <button
              onClick={toggleTheme}
              aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
              className="wedding-theme-toggle"
            >
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>

            {/* Mobile menu button: Hidden at 'lg' breakpoint and above */}
            <div className="lg:hidden ml-2">
              <button
                onClick={toggleMobileMenu}
                className="wedding-mobile-menu-button"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="wedding-mobile-menu-panel"
              >
                {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel: Hidden at 'lg' breakpoint and above */}
      <div
        id="wedding-mobile-menu-panel"
        className={`wedding-mobile-menu-panel ${isMobileMenuOpen ? 'wedding-mobile-menu-open' : 'wedding-mobile-menu-closed'}`}
      >
        <div className="wedding-mobile-menu-content">
          <NavLink to="/wedding" className={mobileNavLinkClasses} onClick={toggleMobileMenu} end>Home</NavLink>
          <NavLink to="/wedding/portfolio" className={mobileNavLinkClasses} onClick={toggleMobileMenu}>Portfolio</NavLink>
          <NavLink to="/wedding/approach" className={mobileNavLinkClasses} onClick={toggleMobileMenu}>Our Approach</NavLink>
          <NavLink to="/wedding/contact" className={mobileNavLinkClasses} onClick={toggleMobileMenu}>Contact</NavLink>
          <RouterLink
            to="/"
            className="wedding-mobile-main-site-link"
            onClick={toggleMobileMenu}
            aria-label="Back to main AD FILMS website"
          >
            <ArrowLeftIcon /> Main Site
          </RouterLink>
        </div>
      </div>
    </header>
  );
};

export default WeddingNavbar;